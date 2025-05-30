/**
 * Determina el idioma basado en la ruta de la URL
 * @param path - La ruta de la URL
 * @returns 'en' | 'es' - El idioma detectado
 */
export function getLanguage(path: string): 'en' | 'es' {
    return path.startsWith('/en') ? 'en' : 'es';
}

/**
 * Obtiene la ruta base según el idioma
 * @param lang - El idioma actual
 * @returns string - La ruta base ('/' para español, '/en' para inglés)
 */
export function getBasePath(lang: 'en' | 'es'): string {
    return lang === 'en' ? '/en' : '/';
}

/**
 * Obtiene la ruta de redirección 404 según el idioma
 * @param lang - El idioma actual
 * @returns string - La ruta de redirección 404
 */
export function get404Path(lang: 'en' | 'es'): string {
    return lang === 'en' ? '/en/404' : '/404';
} 