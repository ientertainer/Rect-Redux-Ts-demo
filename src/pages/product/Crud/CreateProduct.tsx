import * as React from "react"
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {createNewProduct, editProduct} from "../../../actions/ProductActions";
import {IRootReducer} from "../../../reducers";
import {selectProduct} from "../../../actions/ProductActions";

const CreateProduct = () => {
    // Handle state for Product name
    const [productName, setProductName] = React.useState('');
    // Handle state for Quantity
    const [quantity, setQuantity] = React.useState(0);
    // Handle state for price
    const [price, setPrice] = React.useState(0);
    // Handle state for description
    const [description, setDescription] = React.useState('');

    // State of product reducer
    const productReducer = useSelector((state: IRootReducer) => state.productReducer);
    // useDispatch redux hook to dispatch actions
    const dispatch = useDispatch();
    // useHistory routing hook to push new rout
    const history = useHistory();

    React.useEffect(() => {
        if (productReducer.selectedProduct) {
            setProductName(productReducer.selectedProduct.productName);
            setQuantity(productReducer.selectedProduct.quantity);
            setPrice(productReducer.selectedProduct.price);
            setDescription(productReducer.selectedProduct.description);
        }
    }, [productReducer.selectedProduct]);

    /**
     * Handle on create
     */
    const onCreate = () => {
        dispatch(selectProduct(0));
    };

    /**
     * Create or Edit product
     */
    const createOrEditUser = () => {
        if (!productReducer.selectedProduct) {
            dispatch(createNewProduct({ id: +new Date(), productName, quantity, price, description }));
        } else {
            dispatch(editProduct({ ...productReducer.selectedProduct, productName, quantity, price, description }));
        }
        setProductName('');
        setQuantity(0);
        setPrice(0);
        setDescription("");
        onCreate();
        history.push('/list');
    };

    return (
        <div>
            <h4><NavLink to={"/"}> Home </NavLink></h4>
            <h4><NavLink to={"/list"}> View product </NavLink></h4>
            <h1>Create Product</h1>
            <React.Fragment>
                <form onSubmit={createOrEditUser}>
                    <input required placeholder="Product Name" type="text" value={productName}
                           onChange={e => setProductName(e.target.value)}/><br/><br/>
                    <input required placeholder="Description" type="text" value={description}
                           onChange={e => setDescription(e.target.value)}/><br/><br/>
                    <input required placeholder="Quantity" type="number" value={quantity.toString()}
                           onChange={e => setQuantity(parseInt(e.target.value))}/><br/><br/>
                    <input required placeholder="Price" type="number" value={price}
                           onChange={e => setPrice(parseInt(e.target.value))}/><br/><br/>
                    <button type="submit"> {!productReducer.selectedProduct ? "Create" : "Edit"} </button>
                    <br/><br/>
                </form>
            </React.Fragment>
        </div>
    )
};

export default CreateProduct
