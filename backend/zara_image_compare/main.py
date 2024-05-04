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
    "http://localhost:8080",
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


@app.post("/uploadfile/")
async def upload_file(filename: str = Form(...), filedata: str = Form(...)):

    image_as_bytes = str.encode(filedata)  # convert string to bytes
    img_recovered = base64.b64decode(image_as_bytes)  # decode base64string
    try:
        tmp_path = "tmp/" + filename
        #Save file
        with open(tmp_path, "wb") as f:
            f.write(img_recovered)

        resultado = similarity.main("dataset", tmp_path)

        return JSONResponse(resultado)

    except Exception as e:
        return e

