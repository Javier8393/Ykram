import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_aWIaNPCk.mjs';
import 'kleur/colors';
import { a as $$Icon, $ as $$BaseLayout } from '../chunks/BaseLayout_C9Qb_dNi.mjs';
import { $ as $$Hero } from '../chunks/Hero_BGg6TWVU.mjs';
import 'clsx';
import cloudinary from 'cloudinary';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Carrusel = createComponent(async ($$result, $$props, $$slots) => {
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
  const folderName = "Carrusel";
  let images = [];
  try {
    const { resources } = await cloudinary.v2.search.expression(`folder:${folderName} AND resource_type:image`).max_results(30).execute();
    images = resources.map((image) => ({
      url: image.secure_url,
      alt: image.public_id
    }));
  } catch (error) {
    console.error("Error al obtener imágenes de Cloudinary:", error);
  }
  return renderTemplate`${maybeRenderHead()}<div class="carousel" data-astro-cid-sxgvwazn> <div class="carousel-track" data-astro-cid-sxgvwazn> ${images.map((image) => renderTemplate`<img${addAttribute(image.url, "src")} class="carousel-slide"${addAttribute(image.alt, "alt")} data-astro-cid-sxgvwazn>`)} </div> <button class="carousel-button prev" data-astro-cid-sxgvwazn>‹</button> <button class="carousel-button next" data-astro-cid-sxgvwazn>›</button> </div>  `;
}, "E:/Proyectos/Ykram/src/components/Carrusel.astro", void 0);

const $$ContactCTA = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside class="box" data-astro-cid-rcdzuq3a> <!-- Sección de texto a la izquierda --> <div class="info" data-astro-cid-rcdzuq3a> <img alt="Ykram" class="portrait" width="480" height="620" src="/portrait.jpg" data-astro-cid-rcdzuq3a> <h2 data-astro-cid-rcdzuq3a>
¿Tienes una idea en mente? <br data-astro-cid-rcdzuq3a>!Escribeme y la hacemos realidad juntos!
</h2> </div> <!-- Sección de formulario a la derecha --> <form data-astro-cid-rcdzuq3a> <div class="form-group" data-astro-cid-rcdzuq3a> <div class="column" data-astro-cid-rcdzuq3a> <label for="name" data-astro-cid-rcdzuq3a>Nombre:</label> <input type="text" id="name" name="name" placeholder="Tu nombre" required data-astro-cid-rcdzuq3a> <label for="email" data-astro-cid-rcdzuq3a>Correo:</label> <input type="email" id="email" name="email" placeholder="Tu correo" required data-astro-cid-rcdzuq3a> <label for="message" data-astro-cid-rcdzuq3a>Mensaje:</label> <textarea id="message" name="message" placeholder="Tu mensaje" required data-astro-cid-rcdzuq3a></textarea> <div class="button-container" data-astro-cid-rcdzuq3a> <button type="submit" data-astro-cid-rcdzuq3a>
Enviar mensaje
${renderComponent($$result, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "data-astro-cid-rcdzuq3a": true })} </button> </div> </div> </div> </form> </aside>  `;
}, "E:/Proyectos/Ykram/src/components/ContactCTA.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const iconLinks = [
    { label: "Spotify", href: "https://open.spotify.com/show/1CI2iK8Rv4AQWCvazJd2fI?si=o6FCuhZ1QTuXzPLuFRpa_g&nd=1&dlsi=a826e8b43be14771", icon: "spotify" },
    { label: "Ivoox", href: "https://www.ivoox.com/podcast-camino-del-ilustrador_sq_f1831710_1.html", icon: "ivoox" },
    { label: "Youtube", href: "https://youtube.com/@elcaminodelilustrador", icon: "youtube" },
    { label: "Apple Podcast", href: "https://podcasts.apple.com/es/podcast/el-camino-del-ilustrador/id1493738985", icon: "apple" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="box skills" data-astro-cid-ab4ihpzs> <div class="stack gap-1 lg:gap-2" data-astro-cid-ab4ihpzs> <h2 data-astro-cid-ab4ihpzs>${renderComponent($$result, "Icon", $$Icon, { "icon": "expert", "color": "var(--accent-regular)", "size": "2.5rem", "data-astro-cid-ab4ihpzs": true })} Experiencia </h2> <br data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>Desde 2017 he trabajado en proyectos internacionales, en areas como: Juegos de mesa, Libros, Cine y Videojuegos.
<br data-astro-cid-ab4ihpzs>Para mi cada proyecto es unico y especial. Pongo toda mi creatividad 
			y mi experiencia a tu disposicion para lograr un resultado de alta calidad.
</p> </div> <div class="stack gap-1 lg:gap-2" data-astro-cid-ab4ihpzs> <h2 data-astro-cid-ab4ihpzs> <div class="socials" data-astro-cid-ab4ihpzs> ${iconLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} class="social" data-astro-cid-ab4ihpzs> ${renderComponent($$result, "Icon", $$Icon, { "icon": icon, "data-astro-cid-ab4ihpzs": true })} </a>`)} </div> Podcast:<br data-astro-cid-ab4ihpzs> El Camino del ilustrador
</h2> <br data-astro-cid-ab4ihpzs> <p data-astro-cid-ab4ihpzs>
Un programa dedicado al dibujo con entrevistas a profesionales de distintas areas.
<br data-astro-cid-ab4ihpzs><br data-astro-cid-ab4ihpzs>
Aquí hablaremos de actualidad 
			y diferentes procesos creativos. ¡Nos vemos en el camino!</p> </div> </section> `;
}, "E:/Proyectos/Ykram/src/components/Skills.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "es", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20 lg:gap-48" data-astro-cid-j7pv25f6> <div class="wrapper stack gap-8 lg:gap-20" data-astro-cid-j7pv25f6> <header class="hero" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Ilustrador profesional y artista conceptual", "tagline": "", "align": "start", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Carrusel", $$Carrusel, { "data-astro-cid-j7pv25f6": true })} ` })} </header> ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-j7pv25f6": true })} </div> </div> ` })} `;
}, "E:/Proyectos/Ykram/src/pages/index.astro", void 0);

const $$file = "E:/Proyectos/Ykram/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
