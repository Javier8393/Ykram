import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D2Pqrvx1.mjs';
import { manifest } from './manifest_3-JvR4aA.mjs';
import './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page1 = () => import('./pages/_image.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/concept-art.astro.mjs');
const _page4 = () => import('./pages/galerias.astro.mjs');
const _page5 = () => import('./pages/ilustraciones.astro.mjs');
const _page6 = () => import('./pages/proyectos.astro.mjs');
const _page7 = () => import('./pages/_project_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/actions/runtime/route.js", _page0],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/concept-art.astro", _page3],
    ["src/pages/galerias.astro", _page4],
    ["src/pages/ilustraciones.astro", _page5],
    ["src/pages/proyectos.astro", _page6],
    ["src/pages/[project].astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "835fb453-a330-4e6b-8793-88e706da70f8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
