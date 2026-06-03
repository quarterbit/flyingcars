import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://quarterbit.github.io',
  base: '/flyingcars',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
