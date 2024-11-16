import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_aWIaNPCk.mjs';
import 'kleur/colors';
import { $ as $$Mosaico } from '../chunks/Mosaico_C5b3Szqn.mjs';
export { renderers } from '../renderers.mjs';

const $$Ilustraciones = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Mosaico", $$Mosaico, { "folderName": "Ilustraciones" })}`;
}, "E:/Proyectos/Ykram/src/pages/ilustraciones.astro", void 0);

const $$file = "E:/Proyectos/Ykram/src/pages/ilustraciones.astro";
const $$url = "/ilustraciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Ilustraciones,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
