import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://amralaa.site',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404.html') })],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
