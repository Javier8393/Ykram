import cloudinary from "./index";

interface ProjectData {
  name: string;
  description: string;
  featured_image: string | null;
  folder: string;
  date: string; // Se usa la propiedad date del project.json
}

interface CloudinaryFolder {
  name: string;
  path: string;
}

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  filename: string;
  [key: string]: any; // Otras propiedades ignoradas
}

const DEFAULT_FEATURED_IMAGE = "/assets/interrogacion.jpg";

async function fetchFolders(folderPath: string): Promise<CloudinaryFolder[]> {
  try {
    console.log(`Obteniendo carpetas dentro de: ${folderPath}`);
    const { folders }: { folders: CloudinaryFolder[] } = 
      await cloudinary.api.sub_folders(folderPath, { max_results: 30 });

    return folders.map((folder) => ({
      name: folder.name,
      path: folder.path,
    }));
  } catch (error) {
    console.error("Error al obtener las carpetas:", error);
    return [];
  }
}

async function fetchProjectData(folderPath: string): Promise<ProjectData | null> {
  try {
    console.log(`Buscando project.json en la carpeta: ${folderPath}`);

    const { resources }: { resources: CloudinaryImage[] } = await cloudinary.search
      .expression(`folder:${folderPath} AND format:json`)
      .execute();

    if (resources.length > 0) {
      console.log(`Archivo project.json encontrado en ${folderPath}:`, resources[0].secure_url);

      const response = await fetch(resources[0].secure_url);
      const json = await response.json();

      console.log(`Contenido de project.json:`, json);

      return json;
    }

    console.warn(`No se encontró project.json en la carpeta "${folderPath}".`);
    return null;
  } catch (error) {
    console.error(`Error al cargar project.json en la carpeta ${folderPath}:`, error);
    return null;
  }
}

async function fetchImageByName(folderPath: string, featuredImageName: string): Promise<string> {
  try {
    const query = `folder:${folderPath} AND resource_type:image`;
    console.log(`Buscando imagen destacada con query: ${query}`);

    const { resources }: { resources: CloudinaryImage[] } = await cloudinary.search.expression(query).execute();

    console.log(
      `Imágenes disponibles en ${folderPath}:`,
      resources.map((image) => ({
        filename: image.filename,
        public_id: image.public_id,
        secure_url: image.secure_url,
      }))
    );

    const matchedImage = resources.find((image: CloudinaryImage) =>
      image.filename.toLowerCase().startsWith(featuredImageName.toLowerCase())
    );

    return matchedImage ? matchedImage.secure_url : DEFAULT_FEATURED_IMAGE;
  } catch (error) {
    console.error(`Error al buscar la imagen en ${folderPath}:`, error);
    return DEFAULT_FEATURED_IMAGE;
  }
}

export async function loadProjects(): Promise<ProjectData[]> {
  const projects: ProjectData[] = [];

  try {
    console.log("Cargando proyectos desde Cloudinary...");

    const folders = await fetchFolders("Proyectos");

    for (const folder of folders) {
      const projectData = await fetchProjectData(folder.path);

      if (projectData) {
        const featuredImageUrl = await fetchImageByName(
          folder.path,
          projectData.featured_image || ""
        );

        projects.push({
          name: projectData.name,
          description: projectData.description,
          featured_image: featuredImageUrl,
          folder: folder.path,
          date: projectData.date || new Date().toISOString(), // Usa la fecha del project.json o una predeterminada
        });
      } else {
        projects.push({
          name: "Error al cargar proyecto",
          description: "No se encontró el archivo project.json o está mal formateado.",
          featured_image: DEFAULT_FEATURED_IMAGE,
          folder: folder.path,
          date: new Date().toISOString(), // Usa una fecha predeterminada si no se encuentra el project.json
        });
      }
    }

    projects.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

    // Verifica el orden de los proyectos
    console.log(
      "Proyectos ordenados por fecha:",
      projects.map((project) => ({ name: project.name, date: project.date }))
    );
  } catch (error) {
    console.error("Error al cargar los proyectos:", error);
  }

  return projects;
}

(async () => {
  const projects = await loadProjects();
  console.log("Proyectos cargados:", projects);

  if (projects.length === 0) {
    console.error("No se encontraron proyectos disponibles.");
  }
})();
