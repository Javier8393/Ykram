import 'cookie';
import 'kleur/colors';
import './chunks/shared_C3CUXlMH.mjs';
import 'es-module-lexer';
import { f as decodeKey } from './chunks/astro/server_aWIaNPCk.mjs';
import 'clsx';
import './chunks/astro-designed-error-pages_n6DUurGX.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_DP3NARqx.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/Proyectos/Ykram/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cg6G6PUZ.js"}],"styles":[{"type":"inline","content":".hero[data-astro-cid-bbe6dxrz]{font-size:var(--text-lg)}.grid-container[data-astro-cid-bbe6dxrz]{display:grid;grid-template-rows:auto auto;grid-template-columns:1fr 1fr;gap:1rem}.title[data-astro-cid-bbe6dxrz]{grid-column:1 / -1;text-align:center;font-size:var(--text-3xl);color:var(--gray-0)}.content-area[data-astro-cid-bbe6dxrz]{grid-column:1 / -1;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto;gap:1rem}.tagline[data-astro-cid-bbe6dxrz]{grid-column:1 / 2;text-align:center;color:var(--gray-300);font-size:var(--text-md)}.carrusel[data-astro-cid-bbe6dxrz]{grid-column:1 / -1;grid-row:2;width:100%}.image-container[data-astro-cid-bbe6dxrz]{grid-column:2;grid-row:1 / 3;display:flex;align-items:center;justify-content:center}.portrait[data-astro-cid-bbe6dxrz]{aspect-ratio:3 / 4;object-fit:cover;border-radius:1rem;box-shadow:var(--shadow-md)}@media (min-width: 50em){.grid-container[data-astro-cid-bbe6dxrz]{grid-template-rows:auto 1fr;grid-template-columns:2fr 1fr;gap:2rem}.title[data-astro-cid-bbe6dxrz]{font-size:var(--text-5xl)}.tagline[data-astro-cid-bbe6dxrz]{font-size:var(--text-lg)}}@media (max-width: 50em){.grid-container[data-astro-cid-bbe6dxrz]{grid-template-columns:1fr;grid-template-rows:auto auto auto auto;gap:1rem}.content-area[data-astro-cid-bbe6dxrz]{grid-template-columns:1fr;grid-template-rows:auto auto auto}.tagline[data-astro-cid-bbe6dxrz]{grid-column:1}.carrusel[data-astro-cid-bbe6dxrz],.image-container[data-astro-cid-bbe6dxrz]{grid-column:1;grid-row:auto}.portrait[data-astro-cid-bbe6dxrz]{width:100%;height:auto}}\n"},{"type":"external","src":"/_astro/_project_.CkgvH_Mb.css"},{"type":"inline","content":"svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BD7jrNUu.js"}],"styles":[{"type":"external","src":"/_astro/hoisted.cPPnkASS.css"},{"type":"external","src":"/_astro/_project_.CkgvH_Mb.css"},{"type":"inline","content":".masonry-container[data-astro-cid-bhlophxv]{display:grid;grid-template-columns:repeat(3,1fr);gap:25px;max-width:1800px;margin:0 auto;padding:20px}.masonry-item[data-astro-cid-bhlophxv]{width:100%}.masonry-image[data-astro-cid-bhlophxv]{width:100%;height:auto;display:block;border-radius:5px;transition:transform .3s;object-fit:scale-down}.masonry-image[data-astro-cid-bhlophxv]:hover{transform:scale(1.05)}@media (max-width: 768px){.masonry-container[data-astro-cid-bhlophxv]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 480px){.masonry-container[data-astro-cid-bhlophxv]{grid-template-columns:1fr}}\nsvg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}\n"}],"routeData":{"route":"/concept-art","isIndex":false,"type":"page","pattern":"^\\/concept-art\\/?$","segments":[[{"content":"concept-art","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/concept-art.astro","pathname":"/concept-art","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cg6G6PUZ.js"}],"styles":[{"type":"inline","content":".gallery-container[data-astro-cid-jrrs4qun]{display:flex;justify-content:center;align-items:center;gap:3rem;margin-top:2rem;flex-wrap:wrap;width:100%;padding-bottom:100px}.gallery-item[data-astro-cid-jrrs4qun]{display:flex;flex-direction:column;align-items:center;max-width:800px;text-align:center}.gallery-image[data-astro-cid-jrrs4qun]{width:100%;max-width:800px;height:auto;border-radius:1rem;box-shadow:var(--shadow-md);transition:transform .3s}.gallery-image[data-astro-cid-jrrs4qun]:hover{transform:scale(1.08)}.gallery-title[data-astro-cid-jrrs4qun]{margin-top:1rem;font-size:1.5rem;color:var(--gray-100)}@media (max-width: 768px){.gallery-item[data-astro-cid-jrrs4qun]{max-width:90%}.gallery-image[data-astro-cid-jrrs4qun]{max-width:100%}.gallery-title[data-astro-cid-jrrs4qun]{font-size:1.25rem}}\n"},{"type":"external","src":"/_astro/_project_.CkgvH_Mb.css"},{"type":"inline","content":"svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}\n"}],"routeData":{"route":"/galerias","isIndex":false,"type":"page","pattern":"^\\/galerias\\/?$","segments":[[{"content":"galerias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/galerias.astro","pathname":"/galerias","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BD7jrNUu.js"}],"styles":[{"type":"external","src":"/_astro/hoisted.cPPnkASS.css"},{"type":"external","src":"/_astro/_project_.CkgvH_Mb.css"},{"type":"inline","content":".masonry-container[data-astro-cid-bhlophxv]{display:grid;grid-template-columns:repeat(3,1fr);gap:25px;max-width:1800px;margin:0 auto;padding:20px}.masonry-item[data-astro-cid-bhlophxv]{width:100%}.masonry-image[data-astro-cid-bhlophxv]{width:100%;height:auto;display:block;border-radius:5px;transition:transform .3s;object-fit:scale-down}.masonry-image[data-astro-cid-bhlophxv]:hover{transform:scale(1.05)}@media (max-width: 768px){.masonry-container[data-astro-cid-bhlophxv]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 480px){.masonry-container[data-astro-cid-bhlophxv]{grid-template-columns:1fr}}\nsvg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}\n"}],"routeData":{"route":"/ilustraciones","isIndex":false,"type":"page","pattern":"^\\/ilustraciones\\/?$","segments":[[{"content":"ilustraciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ilustraciones.astro","pathname":"/ilustraciones","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cg6G6PUZ.js"}],"styles":[{"type":"external","src":"/_astro/_project_.CkgvH_Mb.css"},{"type":"inline","content":".projects-list[data-astro-cid-arbd3op2]{display:flex;flex-direction:column;align-items:center;gap:3rem;max-width:1600px;margin:0 auto;padding:2.5rem}.project-item[data-astro-cid-arbd3op2]{display:flex;align-items:flex-start;border:1px solid var(--gray-800);border-radius:1.25rem;padding:2.5rem;background-color:var(--gray-999);box-shadow:var(--shadow-sm);transition:box-shadow .3s;width:1000px;max-width:100%;min-height:350px}.project-item[data-astro-cid-arbd3op2]:hover{box-shadow:0 15px 50px #0009}.project-image[data-astro-cid-arbd3op2]{width:300px;height:300px;border-radius:1.25rem;object-fit:cover;margin-right:2.5rem}.project-details[data-astro-cid-arbd3op2]{flex-grow:1;display:flex;flex-direction:column;justify-content:center}.project-details[data-astro-cid-arbd3op2] h3[data-astro-cid-arbd3op2]{font-size:2rem;margin:0;color:var(--accent-light);text-decoration:none}.project-details[data-astro-cid-arbd3op2] p[data-astro-cid-arbd3op2]{color:var(--gray-100);margin-top:1rem;font-size:1.5rem;line-height:1.8;overflow-wrap:break-word}.project-link[data-astro-cid-arbd3op2]{text-decoration:none}@media (max-width: 768px){.project-item[data-astro-cid-arbd3op2]{flex-direction:column;align-items:center;width:100%;text-align:center}.project-image[data-astro-cid-arbd3op2]{width:100%;max-width:400px;height:auto;margin:0 0 2rem}.project-details[data-astro-cid-arbd3op2]{align-items:center;width:100%}.project-details[data-astro-cid-arbd3op2] h3[data-astro-cid-arbd3op2]{font-size:1.75rem}.project-details[data-astro-cid-arbd3op2] p[data-astro-cid-arbd3op2]{font-size:1.25rem}}\nsvg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}\n"}],"routeData":{"route":"/proyectos","isIndex":false,"type":"page","pattern":"^\\/proyectos\\/?$","segments":[[{"content":"proyectos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyectos.astro","pathname":"/proyectos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CgnGEcJ8.js"}],"styles":[{"type":"external","src":"/_astro/_project_.CkgvH_Mb.css"},{"type":"inline","content":".hero[data-astro-cid-bbe6dxrz]{font-size:var(--text-lg)}.grid-container[data-astro-cid-bbe6dxrz]{display:grid;grid-template-rows:auto auto;grid-template-columns:1fr 1fr;gap:1rem}.title[data-astro-cid-bbe6dxrz]{grid-column:1 / -1;text-align:center;font-size:var(--text-3xl);color:var(--gray-0)}.content-area[data-astro-cid-bbe6dxrz]{grid-column:1 / -1;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto;gap:1rem}.tagline[data-astro-cid-bbe6dxrz]{grid-column:1 / 2;text-align:center;color:var(--gray-300);font-size:var(--text-md)}.carrusel[data-astro-cid-bbe6dxrz]{grid-column:1 / -1;grid-row:2;width:100%}.image-container[data-astro-cid-bbe6dxrz]{grid-column:2;grid-row:1 / 3;display:flex;align-items:center;justify-content:center}.portrait[data-astro-cid-bbe6dxrz]{aspect-ratio:3 / 4;object-fit:cover;border-radius:1rem;box-shadow:var(--shadow-md)}@media (min-width: 50em){.grid-container[data-astro-cid-bbe6dxrz]{grid-template-rows:auto 1fr;grid-template-columns:2fr 1fr;gap:2rem}.title[data-astro-cid-bbe6dxrz]{font-size:var(--text-5xl)}.tagline[data-astro-cid-bbe6dxrz]{font-size:var(--text-lg)}}@media (max-width: 50em){.grid-container[data-astro-cid-bbe6dxrz]{grid-template-columns:1fr;grid-template-rows:auto auto auto auto;gap:1rem}.content-area[data-astro-cid-bbe6dxrz]{grid-template-columns:1fr;grid-template-rows:auto auto auto}.tagline[data-astro-cid-bbe6dxrz]{grid-column:1}.carrusel[data-astro-cid-bbe6dxrz],.image-container[data-astro-cid-bbe6dxrz]{grid-column:1;grid-row:auto}.portrait[data-astro-cid-bbe6dxrz]{width:100%;height:auto}}\n"},{"type":"external","src":"/_astro/index.Dbv5A7mO.css"},{"type":"inline","content":"svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/Proyectos/Ykram/src/pages/[project].astro",{"propagation":"none","containsHead":true}],["E:/Proyectos/Ykram/src/pages/concept-art.astro",{"propagation":"none","containsHead":true}],["E:/Proyectos/Ykram/src/pages/ilustraciones.astro",{"propagation":"none","containsHead":true}],["E:/Proyectos/Ykram/src/pages/404.astro",{"propagation":"none","containsHead":true}],["E:/Proyectos/Ykram/src/pages/galerias.astro",{"propagation":"none","containsHead":true}],["E:/Proyectos/Ykram/src/pages/index.astro",{"propagation":"none","containsHead":true}],["E:/Proyectos/Ykram/src/pages/proyectos.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/concept-art@_@astro":"pages/concept-art.astro.mjs","\u0000@astro-page:src/pages/galerias@_@astro":"pages/galerias.astro.mjs","\u0000@astro-page:src/pages/ilustraciones@_@astro":"pages/ilustraciones.astro.mjs","\u0000@astro-page:src/pages/proyectos@_@astro":"pages/proyectos.astro.mjs","\u0000@astro-page:src/pages/[project]@_@astro":"pages/_project_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","E:/Proyectos/Ykram/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","E:/Proyectos/Ykram/node_modules/astro/dist/actions/runtime/virtual/get-action.js":"chunks/get-action_C5sMdIHt.mjs","\u0000astro:internal-actions":"chunks/_astro_internal-actions_DSa06AM8.mjs","\u0000@astrojs-manifest":"manifest_3-JvR4aA.mjs","E:/Proyectos/Ykram/node_modules/photoswipe/dist/photoswipe.esm.js":"_astro/photoswipe.esm.CKijkUPa.js","/astro/hoisted.js?q=0":"_astro/hoisted.BD7jrNUu.js","/astro/hoisted.js?q=2":"_astro/hoisted.CgnGEcJ8.js","/astro/hoisted.js?q=1":"_astro/hoisted.Cg6G6PUZ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_project_.CkgvH_Mb.css","/_astro/index.Dbv5A7mO.css","/portrait.jpg","/_astro/hoisted.BD7jrNUu.js","/_astro/hoisted.Cg6G6PUZ.js","/_astro/hoisted.CgnGEcJ8.js","/_astro/hoisted.cPPnkASS.css","/_astro/photoswipe.esm.CKijkUPa.js","/assets/flags/en.png","/assets/flags/es.png","/assets/galerias/concept-art.jpg","/assets/galerias/ilustraciones.jpg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"/+Yhn8q8EKfuhe4O09EYueu/Co3Qbcoh3AiodEJ5Wkw=","experimentalEnvGetSecretEnabled":false});

export { manifest };
