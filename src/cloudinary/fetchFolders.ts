import cloudinary from "./index";

interface FolderData {
    name: string;
    path: string;
}

export async function fetchFolders(folderPath: string): Promise<FolderData[]> {
    try {
        const { folders } = await cloudinary.api.sub_folders(folderPath);
        return folders.map((folder: any) => ({
            name: folder.name,
            path: folder.path,
        }));
    } catch (error) {
        console.error("Error al obtener las carpetas:", error);
        return [];
    }
}
