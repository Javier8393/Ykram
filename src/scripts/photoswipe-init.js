import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
    gallery: '.masonry-container',
    children: 'a',
    pswpModule: () => import('photoswipe'),
    initialZoomLevel: 'fit',
    secondaryZoomLevel: 1.5, // Zoom al hacer doble clic
    paddingFn: (viewportSize) => {
        return viewportSize.x < 768
            ? { top: 5, bottom: 5, left: 5, right: 5 } // Móviles
            : { top: 100, bottom: 100, left: 100, right: 100 }; // Escritorio
    },
});
lightbox.init();
