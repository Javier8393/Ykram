import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// https://astro.build/config
export default defineConfig({
    output: 'server',
});
