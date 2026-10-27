// Генерує картинку для соцмереж public/og.jpg (1200×630) і public/apple-touch-icon.png.
// Запуск: npm run og  (після зміни назви проєкту або головного фото)
import { readFileSync, existsSync } from 'node:fs';
import { chromium } from 'playwright';
import sharp from 'sharp';

const texts = readFileSync('src/content/texts/uk.ts', 'utf8');
const name = texts.match(/name:\s*'([^']+)'/)?.[1] ?? '';
const eventLine = [...(texts.match(/eventLine:\s*\[([^\]]+)\]/)?.[1] ?? '').matchAll(/'([^']+)'/g)].map((m) => m[1]);

// Шрифти й фото вбудовуємо в сторінку: зі сторінки без адреси браузер не читає локальні файли
const font = (pkg, subset) =>
  `data:font/woff2;base64,${readFileSync(`node_modules/@fontsource-variable/${pkg}/files/${pkg}-${subset}-wght-normal.woff2`).toString('base64')}`;
const photoPath = ['jpg', 'jpeg', 'png', 'webp'].map((ext) => `src/assets/photos/hero.${ext}`).find(existsSync);
const photo = photoPath
  ? `data:image/jpeg;base64,${(await sharp(photoPath).resize({ width: 1400 }).jpeg({ quality: 82 }).toBuffer()).toString('base64')}`
  : null;

const html = `<!doctype html><html lang="uk"><head><meta charset="utf-8"><style>
@font-face{font-family:U;src:url(${font('unbounded', 'cyrillic')});font-weight:200 900;unicode-range:U+0400-04FF}
@font-face{font-family:U;src:url(${font('unbounded', 'latin')});font-weight:200 900}
@font-face{font-family:M;src:url(${font('manrope', 'cyrillic')});font-weight:200 800;unicode-range:U+0400-04FF}
@font-face{font-family:M;src:url(${font('manrope', 'latin')});font-weight:200 800}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;display:grid;grid-template-columns:560px 1fr;background:#fbf5ec;font-family:M;color:#161d45;overflow:hidden}
.text{display:flex;flex-direction:column;justify-content:center;gap:26px;padding:0 20px 0 64px}
.event{font-size:21px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#1e2a6b;line-height:1.5}
.event i{display:inline-block;width:9px;height:9px;margin:0 12px 3px;border-radius:50%;background:#c4253b}
h1{font-family:U;font-size:74px;font-weight:700;line-height:1.08;letter-spacing:-.01em;color:#141b47}
.bar{width:120px;height:10px;border-radius:5px;background:linear-gradient(90deg,#c4253b 0 50%,#2e8c7f 50% 100%)}
.photo{position:relative;margin:44px 44px 44px 0;border:10px solid #fff;border-radius:36px;overflow:hidden;box-shadow:0 28px 56px rgb(22 29 69/.2);background:linear-gradient(135deg,#dff0eb,#fce8ec)}
.photo img{width:100%;height:100%;object-fit:cover;display:block}
</style></head><body>
<div class="text"><p class="event">${eventLine[0] ?? ''}<br>${eventLine.slice(1).join('<i></i>')}</p><h1>${name}</h1><div class="bar"></div></div>
<div class="photo">${photo ? `<img src="${photo}">` : ''}</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 86 });
await browser.close();

await sharp('public/favicon.svg', { density: 400 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('Готово: public/og.jpg, public/apple-touch-icon.png');
