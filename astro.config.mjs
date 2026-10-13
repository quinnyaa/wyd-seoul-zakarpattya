// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: https://<GITHUB_USER>.github.io/<REPO_NAME>/
// Якщо зміниться акаунт або назва репозиторію, достатньо поправити ці два рядки.
const GITHUB_USER = 'quinnyaa';
const REPO_NAME = 'wyd-seoul-zakarpattya';

export default defineConfig({
  site: `https://${GITHUB_USER}.github.io`,
  base: `/${REPO_NAME}/`,
  trailingSlash: 'always',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
});
