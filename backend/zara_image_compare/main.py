# Instalar python-multipart
import os

from pydantic import BaseModel

import similarity
from fastapi import FastAPI, File, UploadFile

app = FastAPI()

'''
curl -X POST "http://localhost:8000/uploadfile/" -H "accept: application/json" -H "Content-Type: multipart/form-data" -F "file=@PCHAN.jpg"

'''

class Item(BaseModel):




@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.post("/uploadfile/")
async def upload_file(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        tmp_path = "tmp/" + file.filename
        #Save file
        with open(tmp_path, "wb") as f:
            f.write(contents)

        resultado = similarity.main("dataset", tmp_path) #TODO: REVISAR





        return resultado

    except Exception as e:
        #return {"message": "There was an error uploading the file"}
        return e
    #TODO: PENDIENTE FORMATEAR PARA QUE PERMITA DATASET GRANDE
    #TODO: COMO DEVOLVER BEN O JSON
    #finally:

    #return {"filename": file.filename}
