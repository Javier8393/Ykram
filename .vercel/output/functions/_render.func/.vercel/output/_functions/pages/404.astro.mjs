import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_aWIaNPCk.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../chunks/Hero_BGg6TWVU.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C9Qb_dNi.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not Found", "description": "404 Error \u2014 this page was not found" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Page Not Found", "tagline": "Not found" })} ` })}`;
}, "E:/Proyectos/Ykram/src/pages/404.astro", void 0);

const $$file = "E:/Proyectos/Ykram/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
