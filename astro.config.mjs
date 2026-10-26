// @ts-check
import { existsSync, readdirSync, renameSync, rmdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { languages } from './src/content/languages.ts';

// Cloudflare Pages, власний домен. Якщо домен зміниться, достатньо поправити цей рядок.
const SITE = 'https://wyd-seoul-uzhhorod.org';

// Cloudflare Pages показує сторінку «не знайдено» з найближчого файлу 404.html,
// а Astro збирає сторінки мов у теки: en/404/index.html → en/404.html
/** @type {import('astro').AstroIntegration} */
const notFoundPages = {
  name: 'not-found-pages',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const root = fileURLToPath(dir);
      for (const folder of ['', ...readdirSync(root)]) {
        const page = join(root, folder, '404', 'index.html');
        if (!existsSync(page)) continue;
        renameSync(page, join(root, folder, '404.html'));
        rmdirSync(join(root, folder, '404'));
      }
    },
  },
};

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  // Сайт став односторінковим: старі адреси ведуть на відповідні секції
  redirects: {
    '/about/': '/#about',
    '/trip/': '/#wyd',
    '/help/': '/#help',
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/404\/?$/.test(page),
      // Сторінки різними мовами позначаються в карті сайту як переклади одна одної
      i18n: {
        defaultLocale: languages[0].code,
        locales: Object.fromEntries(languages.map(({ code }) => [code, code])),
      },
    }),
    notFoundPages,
  ],
  devToolbar: { enabled: false },
});
