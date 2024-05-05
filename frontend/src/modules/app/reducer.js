import {combineReducers} from 'redux';
import * as actionTypes from './actionTypes';

const initialState = {
    error: null,
    loading: false,
    getProduct: null,
    getFoto: null,
};

const error = (state = initialState.error, action) => {

    switch (action.type) {

        case actionTypes.ERROR:
            return action.error;

        default:
            return state;

    }

}

const loading = (state = initialState.loading, action) => {

    switch (action.type) {

        case actionTypes.LOADING:
            return true;

        case actionTypes.LOADED:
            return false;

        case actionTypes.ERROR:
            return false;

        default:
            return state;

    }

}

const getFoto = (state = initialState.getFoto, action) => {
    switch (action.type){
        case actionTypes.GET_FOTO:
            return action.getFoto;

        default:
            return state;
    }
}

const getProduct = (state = initialState.getProduct, action) => {
    switch (action.type){
        case actionTypes.GET_PRODUCTS:
            return action.getProduct;

        default:
            return state;
    }
}

const reducer = combineReducers({
    error,
    loading,
    getProduct,
    getFoto
});

export default reducer;