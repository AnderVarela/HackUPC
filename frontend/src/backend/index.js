/*
export default async function uploadImage(imageBase64) {
    try {
        const response = await fetch("http://localhost:8000/uploadfile/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({filename: "a.jpg", filedata: imageBase64 })
        });

        if (!response.ok) {
            console.log("Error al enviar la imagen")
            return null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al subir la imagen:", error.message);
        return null;
    }
}
*/
export default async function uploadImage(imageBase64, filename = "prueba.jpg") {
    try {
        const formData = new FormData();
        formData.append('filename', filename);
        formData.append('filedata', imageBase64);

        const response = await fetch("http://localhost:8000/uploadfile/", {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            console.log("Error al enviar la imagen");
            return null;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al subir la imagen:", error.message);
        return null;
    }
}
