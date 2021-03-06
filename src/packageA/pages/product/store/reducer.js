import {ACTION_PRODUCT_LIST,ACTION_PRODUCT_CREATE,ACTION_SELECT_PRODUCT,ACTION_SAVE_UPLOADIMG} from './constants';

const defaultState = {
    productList:[],
    createProduct:{},
    selectedProduct:[]
};

export default (state = defaultState,action) => {
    switch(action.type){
        case ACTION_PRODUCT_LIST:
            return {
                ...state,
                productList:action.value
            }
        case ACTION_PRODUCT_CREATE:
            return {
                ...state,
                createProduct:action.value
            }
        case ACTION_SELECT_PRODUCT:
            return {
                ...state,
                selectedProduct:action.payload
            }
        default:
            return state;
    }
}