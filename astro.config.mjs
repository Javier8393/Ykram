import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import vercel from "@astrojs/vercel";
import mdx from '@astrojs/mdx';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// https://astro.build/config
export default defineConfig({
  output: 'server',
  server: {
    port: 4321
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
    imageService: true,
    devImageService: "sharp",
  }),
  integrations: [mdx()],
  // Las páginas 404 se manejan automáticamente por Astro
});