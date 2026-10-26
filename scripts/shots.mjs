// Скріншоти головної сторінки (375 і 1440 px): node scripts/shots.mjs <baseUrl> <outDir>
import { chromium } from 'playwright';

const [base = 'http://localhost:4321', out = 'screenshots'] = process.argv.slice(2);
const pages = ['/'];
const sizes = [
  { name: '1440', width: 1440, height: 900, mobile: false },
  { name: '375', width: 375, height: 667, mobile: true },
];

const browser = await chromium.launch();
for (const size of sizes) {
  const context = await browser.newContext({
    viewport: { width: size.width, height: size.height },
    deviceScaleFactor: size.mobile ? 2 : 1,
    isMobile: size.mobile,
    hasTouch: size.mobile,
    // Скріншот усієї сторінки робимо без анімацій появи, щоб було видно всі блоки
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();
  for (const path of pages) {
    await page.goto(base + path, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const slug = path === '/' ? 'home' : path.replaceAll('/', '');
    await page.screenshot({ path: `${out}/${slug}-${size.name}-top.png` });
    await page.screenshot({ path: `${out}/${slug}-${size.name}.png`, fullPage: true });
  }
  await context.close();
}
await browser.close();
