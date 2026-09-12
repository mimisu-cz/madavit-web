import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'sk',
    locales: ['sk', 'cz', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
