import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IRootReducer } from "../../../reducers";
import { useState } from "react";
import { selectProduct } from "../../../actions/ProductActions";
import { NavLink, useParams } from "react-router-dom";
import "./Product.css"

// Register all params of component here
interface IParams {
   id: string
}

const ViewProduct = () => {
    //useParams routing hook to get Product details by productId
    const param: IParams  = (useParams() as IParams);
    const productId = param.id;

    //Connection with reducers using useSelector redux hook
    const productReducer = useSelector( (state: IRootReducer) => state.productReducer);

    // Handle state for Product Details
    const [ productDetail, setProductDetail ] = useState({
        productName: "",
        description: "",
        quantity: 0,
        price: 0,
    });

    // useDispatch redux hook to dispatch actions
    const dispatch = useDispatch();

    // dispatch selectProduct action
    React.useEffect(() => {
        dispatch(selectProduct(parseInt(productId)))
    },[productId,dispatch]);

    // set response data in productDetail state
    React.useEffect(() => {
        if(productReducer.selectedProduct) {
            setProductDetail({
                productName:productReducer.selectedProduct.productName,
                quantity:productReducer.selectedProduct.quantity,
                price:productReducer.selectedProduct.price,
                description:productReducer.selectedProduct.description,
            })
        }
    },[productReducer.selectedProduct]);

    return (
        <div className="card">
            <h4><NavLink to={"/"}> Home </NavLink></h4>
            <h4><NavLink to={"/list"}> View product </NavLink></h4>
            <div className="container">
                <h4><b>John Doe</b></h4>
                <p>Product Id: {productId}</p>
                <p>Product Name: {productDetail.productName}</p>
                <p>Product Description: {productDetail.description}</p>
                <p>Product Quantity: {productDetail.quantity}</p>
                <p>Product Price: {productDetail.price}</p>
            </div>
        </div>
    );
}

export default ViewProduct;
