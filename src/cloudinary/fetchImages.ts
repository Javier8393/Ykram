import cloudinary from "./index";

interface CloudinaryImage {
    public_id: string;
    secure_url: string;
    display_name?: string; // Opcional, si no siempre está presente
}

export async function fetchImageByName(
    folderPath: string,
    featuredImageName: string
): Promise<CloudinaryImage | null> {
    try {
        // Agrega un comodín (*) para permitir coincidencias parciales
        const query = `folder:${folderPath} AND resource_type:image AND filename:${featuredImageName}*`;

        console.log(`Buscando imagen en la carpeta "${folderPath}" con query: "${query}"`);

        const { resources } = await cloudinary.search
            .expression(query)
            .max_results(1) // Solo buscamos una imagen
            .execute();

        console.log("Resultados de búsqueda:", resources);

        if (resources.length > 0) {
            const image = resources[0];
            return {
                public_id: image.public_id,
                secure_url: image.secure_url,
                display_name: image.filename,
            };
        }

        console.warn(
            `No se encontró ninguna imagen con filename que comience con "${featuredImageName}" en la carpeta "${folderPath}".`
        );
        return null; // Si no se encuentra ninguna imagen
    } catch (error) {
        console.error(
            `Error al buscar la imagen "${featuredImageName}" en la carpeta ${folderPath}:`,
            error
        );
        return null;
    }
}
