// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: https://<GITHUB_USER>.github.io/<REPO_NAME>/
// Якщо зміниться акаунт або назва репозиторію, достатньо поправити ці два рядки.
const GITHUB_USER = 'quinnyaa';
const REPO_NAME = 'wyd-seoul-zakarpattya';

const base = `/${REPO_NAME}/`;

export default defineConfig({
  site: `https://${GITHUB_USER}.github.io`,
  base,
  trailingSlash: 'always',
  // Сайт став односторінковим: старі адреси ведуть на відповідні секції
  redirects: {
    '/about/': `${base}#about`,
    '/trip/': `${base}#wyd`,
    '/help/': `${base}#help`,
  },
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
