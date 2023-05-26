import { defineConfig } from 'astro/config';

import analogjsangular from "@analogjs/astro-angular";

// https://astro.build/config
export default defineConfig({
  server: { port: 3300 },
  integrations: [
    analogjsangular()
  ]
});