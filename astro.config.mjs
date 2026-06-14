import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://paisayehpaisa.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
