import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_aWIaNPCk.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C9Qb_dNi.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Galerias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-jrrs4qun": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="gallery-container" data-astro-cid-jrrs4qun> <div class="gallery-item" data-astro-cid-jrrs4qun> <a href="/ilustraciones" data-astro-cid-jrrs4qun> <img src="/assets/galerias/ilustraciones.jpg" alt="Ilustraciones" class="gallery-image" data-astro-cid-jrrs4qun> </a> <h4 class="gallery-title" data-astro-cid-jrrs4qun>Ilustraciones</h4> </div> <div class="gallery-item" data-astro-cid-jrrs4qun> <a href="/concept-art" data-astro-cid-jrrs4qun> <img src="/assets/galerias/concept-art.jpg" alt="Concept Art" class="gallery-image" data-astro-cid-jrrs4qun> </a> <h4 class="gallery-title" data-astro-cid-jrrs4qun>Concept Art</h4> </div> </div> ` })} `;
}, "E:/Proyectos/Ykram/src/pages/galerias.astro", void 0);

const $$file = "E:/Proyectos/Ykram/src/pages/galerias.astro";
const $$url = "/galerias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Galerias,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
