// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sandiautotruck.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // The thank-you page is only reached after sending the form.
      filter: (page) => !page.includes('/thanks/'),
    }),
  ],
});
