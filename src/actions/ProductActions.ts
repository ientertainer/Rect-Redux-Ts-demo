import {
    CREATE_NEW_PRODUCT,
    DELETE_PRODUCT,
    EDIT_PRODUCT,
    SELECT_PRODUCT
}   from "../reducers/Product/ActionType";
import {IProduct} from "../common/interface/Product";
import {IAction} from "../reducers/Product/Productreducers";

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
export const editProduct = (productId: IProduct): IAction => {
    return {
        type: EDIT_PRODUCT,
        payload: productId
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
