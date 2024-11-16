import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_aWIaNPCk.mjs';
import 'kleur/colors';
import { $ as $$Mosaico } from '../chunks/Mosaico_C5b3Szqn.mjs';
export { renderers } from '../renderers.mjs';

const $$ConceptArt = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Mosaico", $$Mosaico, { "folderName": "ConceptArt" })}`;
}, "E:/Proyectos/Ykram/src/pages/concept-art.astro", void 0);

const $$file = "E:/Proyectos/Ykram/src/pages/concept-art.astro";
const $$url = "/concept-art";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$ConceptArt,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
