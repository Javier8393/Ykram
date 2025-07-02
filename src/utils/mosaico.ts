// Devuelve la imagen con el área más pequeña
export function encontrarCeldaMinima(imagenes: { width?: number; height?: number }[]): { width?: number; height?: number } {
    return imagenes.reduce((min, img) => {
        const areaMin = (min.width || 800) * (min.height || 600);
        const areaImg = (img.width || 800) * (img.height || 600);
        return (areaImg < areaMin) ? img : min;
    }, imagenes[0]);
} 