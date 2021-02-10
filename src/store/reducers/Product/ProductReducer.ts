import {
    CREATE_NEW_PRODUCT,
    DELETE_PRODUCT,
    EDIT_PRODUCT,
    GET_ALL_PRODUCT
} from "../../actionTypes/ProductActionType";
import { IProductReducer } from "../../interface/ProductReducerInterface";
import { IAction } from "../../../common/interface/redux/ActionInterface";
import { initialProductState } from "./InitialProductReducer";


export const productReducer = (state: IProductReducer = initialProductState, action: IAction) => {
    switch (action.type) {
        case CREATE_NEW_PRODUCT:
            return {...state, productList: [...state.productList, action.payload]};
        case GET_ALL_PRODUCT:
            return { ...state };
        case DELETE_PRODUCT:
            let productListDelete = [...state.productList];
            productListDelete.splice(productListDelete.findIndex(product => product.id === action.payload ), 1);
            return { ...state, productList: productListDelete};
        case EDIT_PRODUCT:
            let productList = [...state.productList];
            productList[productList.findIndex(product => product.id === action.payload.id)] = action.payload;
            return { ...state, productList, selectedProduct: undefined};
        default:
            return { ...state };
    }
}

export default productReducer;
