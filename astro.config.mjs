import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

// L'adapter est désactivé en dev pour éviter un conflit Vite/favicon.
// En production (Cloudflare Pages), il est actif — requis par Keystatic.
const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  site: 'https://mindeon.ai',
  trailingSlash: 'always',
  output: 'static',
  adapter: isDev ? undefined : cloudflare(),
  image: {
    quality: 80,
  },
  integrations: [
    react(),
    keystatic(),
    sitemap(),
  ],
  markdown: {
    remarkRehype: {},
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
