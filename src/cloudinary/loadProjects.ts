import cloudinary from "./index";

// Interfaces para tipado
export interface ProjectData {
  name: string | {
    es: string;
    en: string;
  };
  description: string | {
    es: string;
    en: string;
  };
  featured_image: string | null;  // URL de la imagen destacada
  folder: string;        // Ruta de la carpeta en Cloudinary
  date: string;          // Fecha del proyecto
}

interface CloudinaryResource {
  public_id: string;     // ID público del recurso en Cloudinary
  secure_url: string;    // URL segura del recurso
  filename: string;      // Nombre del archivo
  asset_folder: string;  // Carpeta donde está almacenado el recurso
  format: string;        // Formato del archivo (jpg, png, json, etc)
  resource_type: string; // Tipo de recurso (image, raw, etc)
  [key: string]: any;    // Permite propiedades adicionales
}

// Imagen por defecto si no se encuentra una imagen destacada
const DEFAULT_FEATURED_IMAGE = "/assets/interrogacion.jpg";

// Sistema de caché en memoria para evitar llamadas innecesarias a la API
let projectsCache: ProjectData[] | null = null;
let lastFetchTime = 0;
const CACHE_DURATION = 1000 * 60 * 60; // 1 hora en milisegundos

// Sistema de caché para imágenes de proyectos
let projectImagesCache: Map<string, { images: CloudinaryResource[], timestamp: number }> = new Map();
const IMAGES_CACHE_DURATION = 1000 * 60 * 60 * 24; // 24 horas en milisegundos

// Función auxiliar para extraer el nombre del proyecto de la ruta de la carpeta
function getProjectNameFromPath(folderPath: string | undefined): string {
  if (!folderPath) {
    return "Proyecto sin nombre";
  }
  const parts = folderPath.split('/');
  return parts[parts.length - 1] || folderPath;
}

/**
 * Función principal que carga todos los proyectos
 * Una sola llamada a la Api para obtener todos los recursos (imágenes y JSONs)
 */
export async function loadProjects(): Promise<ProjectData[]> {
  try {
    // Verificar si hay caché válida para evitar llamadas innecesarias
    const now = Date.now();
    if (projectsCache && (now - lastFetchTime) < CACHE_DURATION) {
      return projectsCache;
    }

    // Llamada única a la API: Obtener todos los recursos (imágenes y JSONs)
    const { resources }: { resources: CloudinaryResource[] } = await cloudinary.search
      .expression('folder:Proyectos/*')
      .max_results(100)
      .execute();

    if (!resources || resources.length === 0) {
      console.error("No se encontraron recursos en Cloudinary");
      return [];
    }

    // Procesar los recursos y organizarlos por carpeta
    const projectsMap = new Map<string, ProjectData>();
    const jsonContents = new Map<string, any>();

    // Primera pasada: Procesar todos los JSONs
    for (const resource of resources) {
      if (!resource || !resource.asset_folder) continue;

      if (resource.format === 'json') {
        try {
          const response = await fetch(resource.secure_url);
          const json = await response.json();
          jsonContents.set(resource.asset_folder, json);
        } catch (error) {
          console.error(`Error al cargar project.json en ${resource.asset_folder}:`, error);
        }
      }
    }

    // Segunda pasada: Procesar todos los recursos y crear proyectos
    for (const resource of resources) {
      if (!resource || !resource.asset_folder) continue;

      const folderPath = resource.asset_folder;
      
      // Inicializar el proyecto si no existe en el mapa
      if (!projectsMap.has(folderPath)) {
        const json = jsonContents.get(folderPath);
        const projectName = getProjectNameFromPath(folderPath);
        
        // Determinar el formato del nombre y descripción
        const name = json?.name 
          ? (typeof json.name === 'string' 
              ? json.name 
              : { es: json.name.es || projectName, en: json.name.en || projectName })
          : projectName;

        const description = json?.description
          ? (typeof json.description === 'string'
              ? json.description
              : { es: json.description.es || "Sin descripción", en: json.description.en || "No description" })
          : "Sin descripción";
        
        projectsMap.set(folderPath, {
          name,
          description,
          featured_image: DEFAULT_FEATURED_IMAGE,
          folder: folderPath,
          date: json?.date || new Date().toISOString()
        });
      }

      const project = projectsMap.get(folderPath)!;
      const json = jsonContents.get(folderPath);

      // Si es una imagen y coincide con la imagen destacada del JSON
      if ((resource.format === 'jpg' || resource.format === 'png') && 
          json?.featured_image && 
          resource.filename.toLowerCase().startsWith(json.featured_image.toLowerCase())) {
        project.featured_image = resource.secure_url;
      }
    }

    // Convertir el Map a array y ordenar por fecha
    const projects = Array.from(projectsMap.values());
    projects.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });

    // Actualizar caché
    projectsCache = projects;
    lastFetchTime = now;

    return projects;
  } catch (error) {
    console.error("Error al cargar los proyectos:", error);
    return [];
  }
}

/**
 * Función para obtener las imágenes de un proyecto específico
 * Una llamada a la Api para obtener todas las imágenes de la carpeta especificada
 */
export async function getProjectImages(folderName: string): Promise<CloudinaryResource[]> {
  try {
    if (!folderName) {
      console.error("Nombre de carpeta no proporcionado");
      return [];
    }

    // Verificar si hay caché válida para este proyecto
    const now = Date.now();
    const cachedData = projectImagesCache.get(folderName);
    
    if (cachedData && (now - cachedData.timestamp) < IMAGES_CACHE_DURATION) {
      return cachedData.images;
    }

    // Llamada a la API: Obtener todas las imágenes de la carpeta
    const { resources } = await cloudinary.search
      .expression(`folder:${folderName} AND resource_type:image`)
      .max_results(30)
      .execute();
    
    const images = resources || [];

    // Actualizar caché
    projectImagesCache.set(folderName, {
      images,
      timestamp: now
    });
    
    return images;
  } catch (error) {
    console.error(`Error al cargar imágenes del proyecto ${folderName}:`, error);
    return [];
  }
}

// Función de inicialización que se ejecuta al cargar el módulo
(async () => {
  const projects = await loadProjects();
  if (projects.length === 0) {
    console.error("No se encontraron proyectos disponibles.");
  }
})();
