import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
import vercel from "@astrojs/vercel/serverless";
import mdx from '@astrojs/mdx';
dotenv.config();


// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [mdx()]
});