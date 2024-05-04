# Instalar python-multipart

#TODO: PENDIENTE FORMATEAR PARA QUE PERMITA DATASET GRANDE
#TODO: COMO DEVOLVER BEN O JSON ---> DONE!!!!!
#TODO: METER RUTA IMAXEN EN VEZ DE FILENAME

import os

from pydantic import BaseModel

import similarity
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse

app = FastAPI()

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


@app.post("/uploadfile/")
async def upload_file(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        tmp_path = "tmp/" + file.filename
        #Save file
        with open(tmp_path, "wb") as f:
            f.write(contents)

        resultado = similarity.main("dataset", tmp_path)

        return JSONResponse(resultado)

    except Exception as e:
        return e

