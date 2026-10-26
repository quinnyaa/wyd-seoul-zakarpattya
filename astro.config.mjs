// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cloudflare Pages, власний домен. Якщо домен зміниться, достатньо поправити цей рядок.
const SITE = 'https://wyd-seoul-uzhhorod.org';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  // Сайт став односторінковим: старі адреси ведуть на відповідні секції
  redirects: {
    '/about/': '/#about',
    '/trip/': '/#wyd',
    '/help/': '/#help',
  },
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
