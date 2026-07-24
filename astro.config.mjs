// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alacore.net',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'tr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/styleguide'),
    }),
  ],
  vite: {
    build: {
      cssCodeSplit: true,
    },
  },
});
