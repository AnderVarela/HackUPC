# InditexTECH HACKUPC2024 CHALLENGE
![VistaWeb1](https://github.com/manuamest/HackUPC2024-WEB/blob/main/WEB1.png)
## Run Frontend

1. Access to ```frontend``` folder.
```
cd frontend
```
2. Install dependencies.
```
npm install
```
3. Start application.
```
npm start
```


## Dependencies

- Python 3.x
- OpenCV
- NumPy
- scikit-image
- Tensorflow

You can install the required libraries using pip:

```bash
pip install -r requirements.txt
```


## Run Backend

1. Run fastapi
```
fastapi run main.py
```

## Web Usage

Drag and drop image to the web and wait to get similar images.

# Script Usage

This Python script calculates the similarity between a base image and a dataset of images using structural similarity and color histogram comparison. The results are sorted by similarity and saved to a JSON file.

## Features

- Utilizes structural similarity index (SSIM) and histogram comparison for similarity scoring.
- Caches processed images for efficiency.
- Outputs similarity scores in a JSON file, making it easy to use in further data processing.

## Setup

1. Clone the Repository:
```bash
git clone https://github.com/AnderVarela/HackUPC.git
cd HackUPC/scripts
```
2. Prepare the Dataset:Place your dataset of images in the images directory.
3. Configure the Script:Specify the path of your base image in the script.

## Configuration
Modify the script to correctly point to your image directory and the base image:

- `directory`: Path to the directory containing the image dataset.
- `base_image_path`: Path to the base image against which other images are compared.
## Usage
Run the script by navigating to the project directory and executing:
If we want to use the AI model:
```bash
python AIsimilarity.py
```
If we just want to use the computer vision model:
```bash
python VAsimilarity.py
```
Apart from the versions to generate the JSON files, there is also a version to view the results using Matplotlib (shape&color)
```bash
python VAshape&color.py
```bash
python AIshape&color.py
``````

The script processes the images and saves the similarity scores in similarity_scores.json in the current directory.

## Output
The output JSON file contains a list of filenames and their similarity scores, sorted from the most to the least similar to the base image.

## Note
Make sure the image paths and the output directory in the script match your setup. Adjust the image processing functions if needed to suit different image types or quality.
