# Instalar python-multipart

#TODO: PENDIENTE FORMATEAR PARA QUE PERMITA DATASET GRANDE
#TODO: COMO DEVOLVER BEN O JSON ---> DONE!!!!!
#TODO: METER RUTA IMAXEN EN VEZ DE FILENAME

import os
import base64
from pydantic import BaseModel

import similarity
from fastapi import FastAPI, File, UploadFile, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


'''
curl -X POST "http://localhost:8000/uploadfile/" -H "accept: application/json" -H "Content-Type: multipart/form-data" -F "file=@PCHAN.jpg"

'''


class Item(BaseModel):
    year: int
    season: str
    product_type: str
    filename: str
    similarity_score: float


@app.get("/")
async def root():
    return {"message": "Hello World"}

from fastapi import HTTPException

@app.post("/uploadfile/")
async def upload_file(filename: str = Form(...), filedata: str = Form(...)):
    try:
        print("Filename received:", filename)
        print("Filedata size:", len(filedata))
        
        image_as_bytes = base64.b64decode(filedata)
        tmp_path = filename
        with open(tmp_path, "wb") as f:
            f.write(image_as_bytes)

        resultado = similarity.main("dataset", tmp_path)
        return JSONResponse(content=resultado, status_code=200)

    except Exception as e:
        print(f"Error: {e}")  # Esto imprimirá el error en la consola del servidor
        raise HTTPException(status_code=500, detail=str(e))

