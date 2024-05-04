import React, { useState } from "react";
import "../styles/Home.css";
import {useNavigate} from "react-router-dom";
import * as actions from "../actions";
import {useDispatch} from "react-redux";

const Home = () => {
    const [imageSrc, setImageSrc] = useState(null); // Estado para almacenar la URL de la imagen
    const dispatch = useDispatch();
    const navigate = useNavigate();



    // Función para manejar el evento de soltar los archivos
    const handleDrop = (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;

        // Verificamos si se soltó al menos un archivo
        if (files.length > 0) {
            const reader = new FileReader();

            // Leemos el primer archivo como una imagen
            reader.readAsDataURL(files[0]);

            // Cuando la imagen se cargue, actualizamos el estado con la URL de la imagen
            reader.onload = () => {
                setImageSrc(reader.result);
            }
        }
    }

    // Función para manejar el evento de arrastrar sobre el área de soltar
    const handleDragOver = (event) => {
        event.preventDefault();
    }

    // Función para manejar el evento de clic en el botón
    const handleButtonClick = () => {
        // Verificamos si hay una imagen seleccionada
        if (imageSrc) {
            // Llamamos a la función backimage() pasando la ruta de la imagen como parámetro
            backimage(imageSrc);
            navigate(`/product`);
        } else {
            // Si no hay imagen seleccionada, mostramos un mensaje de error
            console.log("No hay imagen seleccionada");
        }
    }

    // Función backimage() que recibe la ruta de la imagen como parámetro
    const backimage = async (imageSrc) => {
        // Aquí puedes realizar la lógica necesaria con la ruta de la imagen
        await dispatch(actions.getProduct(imageSrc));
        console.log("Ruta de la imagen seleccionada:", imageSrc);
    }

    return (
        <div className="element">
            <div className="sing-up-wrapper">
                <div className="sing-up">
                    <div className="div">
                        <p className="INDITEXTECH">
                            <span className="text-wrapper">INDITEX</span>
                            <span className="span">TECH</span>
                        </p>
                        <div className="frame">
                            <p className="p">Suba una imagen de un producto para encontrar productos similares.</p>
                        </div>
                        <div className="datos">
                            <p className="text-wrapper-2">Inserta una imagen para ver similares:</p>
                            <div className="email" onDrop={handleDrop} onDragOver={handleDragOver}>
                                {/* Mostrar la imagen si se ha seleccionado */}
                                {imageSrc && <img src={imageSrc} alt="Imagen seleccionada" style={{ maxWidth: '50%' }} />}
                            </div>
                        </div>
                        <div className="botn">
                            {/* Botón para enviar el formulario */}
                            <button type="button" className="text-wrapper-3" onClick={handleButtonClick}>Buscar similares</button>
                        </div>
                    </div>
                    <div className="foto" />
                </div>
            </div>
        </div>
    );
};

export default Home;
