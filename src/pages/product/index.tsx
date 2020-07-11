import * as React from "react";
import ListProduct from "./Crud/ListProduct";
import {useSelector} from 'react-redux'
import {IRootReducer} from "../../reducers";
const Products = () => {
    // State of product reducer
    const productReducer = useSelector( (state: IRootReducer) => state.productReducer);
    return (
        <React.Fragment>
            <ListProduct productList={productReducer.productList}/>
        </React.Fragment>
    );
};
export default Products;
