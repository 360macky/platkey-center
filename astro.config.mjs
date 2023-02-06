import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from '@astrojs/react';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://github.com/yassinedoghri/astro-i18next
import astroI18next from 'astro-i18next';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), astroI18next()],
});
