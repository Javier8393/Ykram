import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
    gallery: '.masonry-container',
    children: 'a',
    pswpModule: () => import('photoswipe'),
    paddingFn: (viewportSize) => {
        return { top: 10, bottom: 10, left: 10, right: 10 };
    },
    showHideAnimationType: 'fade', // Opción para evitar efectos de recorte
    initialZoomLevel: 'fit' // Asegura que las imágenes se ajusten a la ventana emergente sin recortes
});

lightbox.init();
