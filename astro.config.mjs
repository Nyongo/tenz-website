// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Set this in your environment (e.g. `SITE=https://example.com`)
  // to enable correct canonical URLs + OG URLs.
  site: process.env.SITE,
});
