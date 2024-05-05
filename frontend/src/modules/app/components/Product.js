/*
import React from "react";
import "../styles/Product.css";
import { useSelector } from "react-redux";
import * as selectors from '../selectors';

const Product = () => {
    const getProduct = useSelector(selectors.getProduct);

    if (getProduct === null) {
        // Muestra el spinner mientras getProduct es null
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>
        );
    }

    // Renderiza el componente normal cuando getProduct no es null
    return (
        <div className="sing-up1">
            <div className="frame">
                <p className="INDITEXTECH">
                    <span className="text-wrapper">INDITEX</span>
                    <span className="span">TECH</span>
                </p>
            </div>
            <div className="div">
                <div className="foto">
                    <div className="frame-2" />
                </div>
                <div className="frame-3">
                    <div className="frame-4" />
                    <div className="frame-4" />
                    <div className="frame-4" />
                    <div className="frame-4" />
                    <div className="frame-4" />
                    <div className="frame-4" />
                </div>
            </div>
        </div>
    );
};

export default Product;
*/

import React from "react";
import "../styles/Product.css";
import { useSelector } from "react-redux";
import * as selectors from '../selectors';

const Product = () => {
    const productData = useSelector(selectors.getProduct);
    const fotoPrincipal = useSelector(selectors.getFoto)

    if (productData === null) {
        // Muestra el spinner mientras getProduct es null
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
            </div>
        );
    }

    // Intenta parsear productData si es necesario
    let getProduct;
    try {
        getProduct = typeof productData === 'string' ? JSON.parse(productData) : productData;
    } catch (error) {
        console.error('Error parsing productData', error);
        // Manejo del error si el JSON no es válido
        return (
            <div>Error parsing product data</div>
        );
    }

    // Asegúrate de que getProduct es un array
    if (!Array.isArray(getProduct)) {
        console.error('Expected an array for getProduct, but received:', getProduct);
        return (
            <div>Invalid product data</div>
        );
    }

    // Renderiza las imágenes en los divs frame-4 basado en la data de getProduct
    const imageElements = getProduct.map((item, index) => (
        <div key={index} className="frame-4">
            <img src={item.filename} alt={`Product ${index + 1}`} />
        </div>
    ));

    // Renderiza el componente normal cuando getProduct no es null
    return (
        <div className="sing-up1">
            <div className="frame">
                <p className="INDITEXTECH">
                    <span className="text-wrapper">INDITEX</span>
                    <span className="span">TECH</span>
                </p>
            </div>
            <div className="div">
                <div className="foto">
                    <div className="frame-2">
                        <img src={"fotoPrincipal"} alt={"Producto principal"}/>
                    </div>
                </div>
                <div className="frame-3">
                    {imageElements}
                </div>
            </div>
        </div>
    );
};

export default Product;