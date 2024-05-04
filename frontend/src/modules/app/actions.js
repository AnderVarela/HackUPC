import * as actionTypes from './actionTypes';
import uploadImage from "../../backend";

export const loading = () => ({
    type: actionTypes.LOADING
});

export const loaded = () => ({
    type: actionTypes.LOADED
});

export const error = error => ({
    type: actionTypes.ERROR,
    error
});

const getProductCompleted = getProduct => ({
    type: actionTypes.GET_PRODUCTS,
    getProduct
});

export const getProduct = (text) => async (dispatch) => {

    dispatch(getProductCompleted(await uploadImage(text)));

}