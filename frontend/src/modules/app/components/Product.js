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
