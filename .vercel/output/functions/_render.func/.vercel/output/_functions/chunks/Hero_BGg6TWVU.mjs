import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, b as createAstro } from './astro/server_aWIaNPCk.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { align = "center", tagline, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["hero grid-container", align], "class:list")} data-astro-cid-bbe6dxrz> <!-- Título: Siempre encima de todo --> <h3 class="title" data-astro-cid-bbe6dxrz>${title}</h3> <!-- Tagline, Carrusel e Imagen --> <div class="content-area" data-astro-cid-bbe6dxrz> ${tagline && renderTemplate`<p class="tagline" data-astro-cid-bbe6dxrz>${tagline}</p>`} <div class="carrusel" data-astro-cid-bbe6dxrz> ${renderSlot($$result, $$slots["default"])} </div> <div class="image-container" data-astro-cid-bbe6dxrz></div> </div> </div> `;
}, "E:/Proyectos/Ykram/src/components/Hero.astro", void 0);

export { $$Hero as $ };
