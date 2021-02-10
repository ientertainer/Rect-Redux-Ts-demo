import { combineReducers } from 'redux';
import { IProductReducer } from '../interface/ProductReducerInterface';
import productReducer from "./Product/ProductReducer";

// Register all reducer
export interface IRootReducer {
    // Product reducer state
    productReducer: IProductReducer
}

export default combineReducers({
    productReducer
});
