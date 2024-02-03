import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  server: { host: true },
  site: "https://www.fiskefrost.com/",
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: 'server',
  adapter: vercel({
    imageService: true,
    speedInsights: {
      enabled: false,
    },
    webAnalytics: {
      enabled: true,
    },
  }),
});