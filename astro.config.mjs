import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  server: { host: true},
  site: "https://www.fiskefrost.com/",
  integrations: [tailwind(), mdx(), sitemap()],
  output: 'server',
  adapter: vercel({
    imageService: true,
    speedInsights: {
      enabled: true,
    },
    webAnalytics: {
      enabled: true,
    },
  }),
});