// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://aloysian-clubs-hub.vercel.app',
  base: '/',
  output: 'static',
  build: {
    assets: '_astro'
  }
});
