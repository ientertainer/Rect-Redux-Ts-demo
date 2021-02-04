import { combineReducers } from 'redux';
import productReducer, {IProductReducerState} from './Product/Productreducers';

// Register all reducer
export interface IRootReducer {
    // Product reducer state
    productReducer: IProductReducerState
}

export default combineReducers({
    productReducer
});
