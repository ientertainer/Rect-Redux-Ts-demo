import {
    CREATE_NEW_PRODUCT,
    DELETE_PRODUCT,
    EDIT_PRODUCT,
    SELECT_PRODUCT
}   from "../actionTypes/ProductActionType";
import {IProduct} from "../interface/ProductReducerInterface";
import {IAction} from "../../common/interface/redux/ActionInterface";

/**
 * Create new product action
 * @param product
 */
export const createNewProduct = (product: IProduct): IAction => {
    return {
        type: CREATE_NEW_PRODUCT,
        payload: product
    }
};

/**
 * Delete product based on productId
 * @param productId
 */
export const deleteProduct= (productId: number): IAction => {
    return {
        type: DELETE_PRODUCT,
        payload: productId
    }
};

/**
 * Edit product based on productId
 * @param productId
 */
export const editProduct = (product: IProduct): IAction => {
    return {
        type: EDIT_PRODUCT,
        payload: product
    }
};

/**
 * Select product based on productId
 * @param productId
 */
export const selectProduct = (productId: number): IAction => {
    return {
        type: SELECT_PRODUCT,
        payload: productId
    }
};
