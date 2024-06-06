import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      themes: {
        light: 'one-dark-pro',
        dark: 'one-dark-pro'
      },
      langs: [],
      wrap: true,
      transformers: [],
    }
  }
});