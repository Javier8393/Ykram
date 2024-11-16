import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from './astro/server_aWIaNPCk.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_C9Qb_dNi.mjs';
import cloudinary from 'cloudinary';
import { $ as $$Image } from './_astro_assets_BeBLs1xU.mjs';
/* empty css                             */

const $$Astro = createAstro();
const $$Mosaico = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Mosaico;
  const { folderName } = Astro2.props;
  let images = [];
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
  try {
    const { resources } = await cloudinary.v2.search.expression(`folder:${folderName} AND resource_type:image`).max_results(30).execute();
    images = resources.sort((a, b) => a.display_name.localeCompare(b.display_name));
  } catch (error) {
    console.error("Error al buscar im\xE1genes:", error);
    throw new Error("No se pudieron obtener las im\xE1genes de la carpeta.");
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-bhlophxv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="masonry-container" data-astro-cid-bhlophxv> ${images.length > 0 ? images.map((image) => renderTemplate`<a${addAttribute(image.secure_url, "href")}${addAttribute(image.width, "data-pswp-width")}${addAttribute(image.height, "data-pswp-height")}${addAttribute(image.display_name, "title")} class="masonry-item" data-astro-cid-bhlophxv> ${renderComponent($$result2, "Image", $$Image, { "src": image.secure_url, "alt": image.display_name, "width": image.width, "height": image.height, "loading": "eager", "class": "masonry-image", "data-astro-cid-bhlophxv": true })} </a>`) : renderTemplate`<p data-astro-cid-bhlophxv>No hay imágenes disponibles.</p>`} </div> ` })}  `;
}, "E:/Proyectos/Ykram/src/components/Mosaico.astro", void 0);

export { $$Mosaico as $ };
