export default async function uploadImage(imageBase64) {
    try {
        const response = await fetch("/uploadfile/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ image: imageBase64 })
        });

        if (!response.ok) {
            throw new Error("Error al enviar la imagen");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al subir la imagen:", error.message);
        return { error: error.message };
    }
}
