import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  try {
    return await next();
  } catch (error) {
    const path = context.url.pathname;
    const lang = path.startsWith('/en') ? 'en' : 'es';
    
    // Redirigir a la página 404 con el idioma correcto
    return context.redirect(`/404.html?lang=${lang}`);
  }
}); 