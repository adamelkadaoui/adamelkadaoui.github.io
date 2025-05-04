import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://adamelkadaoui.github.io/',
  integrations: [mdx(), sitemap(), tailwind()],
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    prefixDefaultLocale: true
  }
});