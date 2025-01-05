import cloudinary from "./index";

interface ProjectData {
    name: string;
    description: string;
    featured_image: string | null;
}

export async function fetchProjectData(folderPath: string): Promise<ProjectData | null> {
    try {
        const { resources } = await cloudinary.search
            .expression(`folder:${folderPath} AND filename:project.json`)
            .execute();

        if (resources.length > 0) {
            const response = await fetch(resources[0].secure_url);
            return await response.json();
        }

        return null; // Si no hay JSON en la carpeta
    } catch (error) {
        console.error(`Error al cargar project.json en la carpeta ${folderPath}:`, error);
        return null;
    }
}
