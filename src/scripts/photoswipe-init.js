import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

// Configuración común para ambos contenedores
const commonConfig = {
    children: 'a',
    pswpModule: () => import('photoswipe'),
    initialZoomLevel: 'fit',
    secondaryZoomLevel: 1.5, // Zoom al hacer doble clic
    paddingFn: (viewportSize) => {
        return viewportSize.x < 768
            ? { top: 5, bottom: 5, left: 5, right: 5 } // Móviles
            : { top: 100, bottom: 100, left: 100, right: 100 }; // Escritorio
    },
};

// Inicializar PhotoSwipe para Mosaico
const lightboxMosaico = new PhotoSwipeLightbox({
    ...commonConfig,
    gallery: '.masonry-container',
});
lightboxMosaico.init();

// Inicializar PhotoSwipe para Grid
const lightboxGrid = new PhotoSwipeLightbox({
    ...commonConfig,
    gallery: '.grid-container',
});
lightboxGrid.init();
