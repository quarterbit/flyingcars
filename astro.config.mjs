import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.flying-cars.blog',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
