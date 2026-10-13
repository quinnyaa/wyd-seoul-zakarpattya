// Lighthouse у мобільному режимі для головної сторінки. Спершу: npm run build && npm run preview
// Запуск: npm run lighthouse  (або node scripts/lighthouse.mjs https://адреса-сайту)
import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync } from 'node:fs';

const base = (process.argv[2] ?? 'http://localhost:4321/wyd-seoul-zakarpattya').replace(/\/$/, '');
const pages = ['/'];
mkdirSync('.lighthouseci', { recursive: true });

const rows = [];
for (const path of pages) {
  const out = `.lighthouseci/${path === '/' ? 'home' : path.replaceAll('/', '')}.json`;
  execFileSync('npx', ['--yes', 'lighthouse', base + path, '--quiet', '--output=json', `--output-path=${out}`, '--chrome-flags=--headless=new'], { stdio: ['ignore', 'ignore', 'inherit'] });
  const { categories: c, audits: a } = JSON.parse(readFileSync(out, 'utf8'));
  const score = (key) => Math.round(c[key].score * 100);
  rows.push({
    сторінка: path,
    Performance: score('performance'),
    Accessibility: score('accessibility'),
    'Best Practices': score('best-practices'),
    SEO: score('seo'),
    LCP: a['largest-contentful-paint'].displayValue,
    CLS: a['cumulative-layout-shift'].displayValue,
    TBT: a['total-blocking-time'].displayValue,
  });
}
console.table(rows);
