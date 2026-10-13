// Перевірка зібраного сайту. Спершу: npm run build && npm run preview
// Запуск: npm test  (або node scripts/test.mjs http://localhost:4321/wyd-seoul-zakarpattya)
import { chromium } from 'playwright';

const base = (process.argv[2] ?? 'http://localhost:4321/wyd-seoul-zakarpattya').replace(/\/$/, '');
const origin = new URL(base).origin;
const pages = ['/', '/about/', '/trip/', '/help/'];
const widths = [360, 390, 768, 1024, 1440];

let failed = 0;
const check = (ok, label, details = '') => {
  if (!ok) failed++;
  console.log(`${ok ? '✓' : '✗'} ${label}${details ? ` — ${details}` : ''}`);
};

const browser = await chromium.launch();

// 1. Сторінки відкриваються, консоль чиста, немає горизонтального скролу
const linkSet = new Set();
for (const path of pages) {
  for (const width of widths) {
    const page = await browser.newPage({ viewport: { width, height: 800 } });
    const errors = [];
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    page.on('pageerror', (e) => errors.push(String(e)));
    page.on('requestfailed', (r) => errors.push(`не завантажилось: ${r.url()}`));
    const response = await page.goto(base + path, { waitUntil: 'networkidle' });
    const m = await page.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      inner: window.innerWidth,
      h1: document.querySelectorAll('h1').length,
      title: document.title,
      description: document.querySelector('meta[name=description]')?.content ?? '',
      links: [...document.querySelectorAll('a[href]')].map((a) => a.href),
      images: [...document.images].filter((i) => !i.getAttribute('width') || !i.getAttribute('height') || !i.hasAttribute('alt')).length,
    }));
    m.links.forEach((l) => linkSet.add(l));
    const ok = response.status() === 200 && !errors.length && m.scroll <= m.inner && m.h1 === 1 && m.title && m.description && !m.images;
    check(ok, `${path} @ ${width}px`, ok ? '' : JSON.stringify({ status: response.status(), errors, scroll: m.scroll, h1: m.h1, images: m.images }));
    await page.close();
  }
}

// 2. Унікальні title і description
{
  const page = await browser.newPage();
  const seen = { title: new Set(), description: new Set() };
  for (const path of pages) {
    await page.goto(base + path);
    seen.title.add(await page.title());
    seen.description.add(await page.getAttribute('meta[name=description]', 'content'));
  }
  check(seen.title.size === pages.length && seen.description.size === pages.length, 'title і description унікальні на кожній сторінці');
  await page.close();
}

// 3. Немає битих внутрішніх посилань
{
  const page = await browser.newPage();
  const internal = [...linkSet].filter((l) => l.startsWith(origin));
  const broken = [];
  for (const link of internal) {
    const target = new URL(link);
    if (!target.pathname.startsWith(new URL(base).pathname)) broken.push(`${link} (поза підшляхом)`);
    const response = await page.request.get(target.origin + target.pathname);
    if (response.status() !== 200) broken.push(`${link} → ${response.status()}`);
    else if (target.hash) {
      await page.goto(link);
      if (!(await page.$(`[id="${target.hash.slice(1)}"]`))) broken.push(`${link} (немає якоря)`);
    }
  }
  check(!broken.length, `внутрішні посилання (${internal.length})`, broken.join(', '));
  for (const file of ['/favicon.svg', '/og.jpg', '/apple-touch-icon.png', '/robots.txt', '/sitemap-index.xml']) {
    const response = await page.request.get(base + file);
    check(response.status() === 200, `файл ${file}`);
  }
  const missing = await page.goto(`${base}/nema-takoi-storinky/`);
  check(missing.status() === 404 && (await page.locator('h1').count()) === 1, 'сторінка 404');
  await page.close();
}

// 4. Мобільний: меню, зони дотику, розмір тексту, закріплена кнопка
{
  const context = await browser.newContext({ viewport: { width: 360, height: 740 }, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  const menuState = () => page.evaluate(() => getComputedStyle(document.querySelector('#site-menu')).visibility);
  const open = async () => {
    await page.click('[data-menu-toggle]');
    await page.waitForTimeout(400);
  };

  await page.goto(base + '/', { waitUntil: 'networkidle' });
  check((await menuState()) === 'hidden', 'меню спочатку закрите');
  await open();
  const box = await page.locator('#site-menu').boundingBox();
  check((await menuState()) === 'visible' && box.width >= 360 && box.height >= 740, 'бургер-меню відкривається на весь екран');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(400);
  check((await menuState()) === 'hidden', 'меню закривається по Esc');
  await open();
  await page.mouse.click(180, 700);
  await page.waitForTimeout(400);
  check((await menuState()) === 'hidden', 'меню закривається кліком поза ним');
  await open();
  await page.click('#site-menu a[href$="/trip/"]');
  await page.waitForURL('**/trip/');
  await page.waitForTimeout(600);
  check((await menuState()) === 'hidden', 'меню закривається після кліку на пункт, перехід відбувся');

  for (const path of pages) {
    await page.goto(base + path, { waitUntil: 'networkidle' });
    const report = await page.evaluate(() => {
      const visible = (el) => {
        const r = el.getBoundingClientRect();
        const s = getComputedStyle(el);
        return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none';
      };
      const small = [...document.querySelectorAll('a, button')]
        .filter((el) => visible(el) && !el.classList.contains('skip-link'))
        .filter((el) => {
          const r = el.getBoundingClientRect();
          return r.width < 44 || r.height < 44;
        })
        .map((el) => `${el.textContent.trim().slice(0, 24) || el.className} ${Math.round(el.getBoundingClientRect().width)}×${Math.round(el.getBoundingClientRect().height)}`);
      const tiny = new Set();
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        const parent = node.parentElement;
        if (!node.textContent.trim() || !parent || !visible(parent) || parent.closest('.visually-hidden, script, style')) continue;
        const size = parseFloat(getComputedStyle(parent).fontSize);
        if (size < 16) tiny.add(`${node.textContent.trim().slice(0, 24)} ${size}px`);
      }
      return { small, tiny: [...tiny] };
    });
    check(!report.small.length, `${path}: кнопки й посилання ≥ 44×44`, report.small.join('; '));
    check(!report.tiny.length, `${path}: текст ≥ 16 px`, report.tiny.join('; '));
  }

  await page.goto(base + '/', { waitUntil: 'networkidle' });
  const sticky = () => page.evaluate(() => getComputedStyle(document.querySelector('.sticky-help')).visibility);
  await page.evaluate(() => window.scrollTo(0, 1600));
  await page.waitForTimeout(700);
  check((await sticky()) === 'visible', 'закріплена кнопка «Допомогти» видима під час скролу');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(700);
  const overlap = await page.evaluate(() => {
    const bar = document.querySelector('.sticky-help').getBoundingClientRect();
    const last = [...document.querySelectorAll('footer a, footer p')].pop().getBoundingClientRect();
    return last.bottom > bar.top;
  });
  check(!overlap, 'закріплена кнопка не перекриває кінець сторінки');
  await context.close();
}

// 5. Lightbox
{
  const context = await browser.newContext({ viewport: { width: 390, height: 800 }, isMobile: true, hasTouch: true });
  const page = await context.newPage();
  await page.goto(base + '/about/', { waitUntil: 'networkidle' });
  const isOpen = () => page.evaluate(() => document.querySelector('[data-lightbox]').open);
  const openFirst = async () => {
    await page.locator('[data-lightbox-item]').first().click();
    await page.waitForTimeout(400);
  };
  await openFirst();
  check(await isOpen(), 'lightbox відкривається кліком по фото');
  const loaded = await page.evaluate(async () => {
    const img = document.querySelector('[data-lightbox-img]');
    if (img.hidden) return true;
    await img.decode().catch(() => {});
    return img.naturalWidth > 0;
  });
  check(loaded, 'збільшене фото завантажується');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);
  check(!(await isOpen()), 'lightbox закривається по Esc');
  await openFirst();
  await page.mouse.click(195, 30);
  await page.waitForTimeout(300);
  check(!(await isOpen()), 'lightbox закривається кліком поза фото');
  await openFirst();
  await page.click('[data-lightbox-next]');
  check((await page.textContent('[data-lightbox-caption]')).startsWith('2 /'), 'lightbox гортає фото');
  const swipe = (dx, dy) =>
    page.evaluate(([dx, dy]) => {
      const el = document.querySelector('[data-lightbox-stage]');
      const touch = (x, y) => new Touch({ identifier: 1, target: el, clientX: x, clientY: y });
      const fire = (type, x, y) =>
        el.dispatchEvent(new TouchEvent(type, { bubbles: true, touches: type === 'touchend' ? [] : [touch(x, y)], changedTouches: [touch(x, y)] }));
      fire('touchstart', 195, 400);
      fire('touchmove', 195 + dx / 2, 400 + dy / 2);
      fire('touchend', 195 + dx, 400 + dy);
    }, [dx, dy]);
  await swipe(-120, 0);
  check((await page.textContent('[data-lightbox-caption]')).startsWith('3 /'), 'свайп убік гортає фото');
  await swipe(0, 160);
  await page.waitForTimeout(300);
  check(!(await isOpen()), 'lightbox закривається свайпом');
  await context.close();
}

// 6. Формат посилань у контактах
{
  const page = await browser.newPage();
  await page.goto(base + '/help/', { waitUntil: 'networkidle' });
  const formats = {
    tel: /^tel:\+\d{10,15}$/,
    telegram: /^https:\/\/t\.me\/[A-Za-z0-9_]{4,}$/,
    whatsapp: /^https:\/\/wa\.me\/\d{10,15}$/,
    viber: /^viber:\/\/chat\?number=%2B\d{10,15}$/,
    email: /^mailto:[^@\s]+@[^@\s]+\.[^@\s]+$/,
  };
  const cards = await page.locator('[data-contact]').count();
  check(cards >= 2 && cards <= 3, `карток контактів: ${cards}`);
  for (const [type, pattern] of Object.entries(formats)) {
    const hrefs = await page.locator(`[data-contact] [data-link="${type}"]`).evaluateAll((els) => els.map((el) => el.getAttribute('href')));
    const bad = hrefs.filter((href) => !pattern.test(href));
    check(hrefs.length === cards && !bad.length, `посилання ${type} (${hrefs.length})`, bad.join(', '));
  }
  const forbidden = await page.evaluate(() => /IBAN|UA\d{27}|\b\d{4}[ -]?\d{4}[ -]?\d{4}[ -]?\d{4}\b/.test(document.body.innerText) || document.forms.length > 0);
  check(!forbidden, 'немає форм, номерів карток та IBAN');
  await page.close();
}

await browser.close();
console.log(failed ? `\nПомилок: ${failed}` : '\nУсі перевірки пройдено');
process.exit(failed ? 1 : 0);
