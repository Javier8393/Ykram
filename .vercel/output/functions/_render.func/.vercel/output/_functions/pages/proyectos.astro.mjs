import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_aWIaNPCk.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C9Qb_dNi.mjs';
import cloudinary from 'cloudinary';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Proyectos = createComponent(async ($$result, $$props, $$slots) => {
  let projects = [];
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
  try {
    const { folders } = await cloudinary.v2.api.sub_folders("Proyectos");
    projects = await Promise.all(
      folders.map(async (folder) => {
        try {
          const { resources: images } = await cloudinary.v2.search.expression(`folder:${folder.path} AND resource_type:image`).execute();
          const { resources: jsonResources } = await cloudinary.v2.search.expression(`folder:${folder.path} AND filename:project.json`).execute();
          if (jsonResources.length > 0) {
            const response = await fetch(jsonResources[0].secure_url);
            const projectData = await response.json();
            const matchedImage = images.find(
              (image) => image.display_name === projectData.featured_image
            );
            const featuredImageUrl = matchedImage ? matchedImage.secure_url : null;
            return {
              ...projectData,
              folder: folder.path,
              featured_image: featuredImageUrl
            };
          }
        } catch (error) {
          console.error(`Error al cargar el JSON del proyecto ${folder.name}:`, error);
        }
        return null;
      })
    );
    projects = projects.filter((project) => project !== null);
  } catch (error) {
    console.error("Error al cargar los proyectos:", error);
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-arbd3op2": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="projects-list" data-astro-cid-arbd3op2> ${projects.length > 0 ? projects.map((project) => renderTemplate`<a${addAttribute(`/${project.folder.split("/")[1]}`, "href")} class="project-link" data-astro-cid-arbd3op2> <div class="project-item" data-astro-cid-arbd3op2> <img${addAttribute(project.featured_image, "src")}${addAttribute(project.name, "alt")} class="project-image" data-astro-cid-arbd3op2> <div class="project-details" data-astro-cid-arbd3op2> <h3 data-astro-cid-arbd3op2>${project.name}</h3> <p data-astro-cid-arbd3op2>${project.description}</p> </div> </div> </a>`) : renderTemplate`<p data-astro-cid-arbd3op2>No hay proyectos disponibles.</p>`} </div> ` })} `;
}, "E:/Proyectos/Ykram/src/pages/proyectos.astro", void 0);

const $$file = "E:/Proyectos/Ykram/src/pages/proyectos.astro";
const $$url = "/proyectos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Proyectos,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
