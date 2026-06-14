import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dodatechcom.github.io',
  base: '/paisayehpaisa',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
