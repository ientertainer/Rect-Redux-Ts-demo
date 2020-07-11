import {
    CREATE_NEW_PRODUCT,
    DELETE_PRODUCT,
    EDIT_PRODUCT,
    GET_ALL_PRODUCT,
    SELECT_PRODUCT
} from "./ActionType";
import {IProduct} from "../../common/interface/Product";

// Interface for productReducer
export interface IProductReducerState {
    // productList
    productList: IProduct[]
    // Selected Product
    selectedProduct?: IProduct
}

// Interface for action
export interface IAction {
    payload: any;
    type: string
}

// Initial state values for productReducer
const initialState: IProductReducerState = {
    productList: [{ id: +new Date(), productName: 'Product_Name', quantity: 25, price: 20,description:"product details" }],
    selectedProduct: undefined
}

export const productReducer = (state: IProductReducerState = initialState, action: IAction) => {
    switch (action.type) {
        case CREATE_NEW_PRODUCT:
            return {...state, productList: [...state.productList, action.payload]};
        case GET_ALL_PRODUCT:
            return { ...state };
        case SELECT_PRODUCT:
            const selectedProduct= state.productList.find(product => product.id === action.payload);
            return { ...state, selectedProduct};
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
