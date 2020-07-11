import * as React from "react";
import { useHistory } from "react-router-dom";
import { IProduct } from "../../../common/interface/Product";
import { useDispatch } from "react-redux";
import { deleteProduct, selectProduct } from "../../../actions/ProductActions";

// Register all props of component here
interface IProductListProps {
    // productList
    productList: IProduct[];
}

const ListProduct = (props: IProductListProps) => {

    // useDispatch redux hook to dispatch actions
    const dispatch = useDispatch();
    // useHistory routing hook to push new rout
    const history = useHistory();

    /**
     * Delete product based on productId
     * @param productId
     */
    const onDelete = (productId: number) => {
        dispatch(deleteProduct(productId));
    };

    /**
     * Select product based on productId
     * @param productId
     */
    const onEdit = (productId: number) => {
        dispatch(selectProduct(productId));
        history.push("/create");
    };

    /**
     * create new product
     */
    const createProduct = () => {
        dispatch(selectProduct(0));
        history.push("/create");
    };

    /**
     * View Product Details
     * @param productId
     */
    const onView = (productId: number) => {
        history.push(`/view/${productId}`);
    };

    return (
        <div>
            <h1>List of Product</h1>
            <button onClick={ createProduct }>Create Product</button>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.productList.map((product: IProduct, index: number) => {
                        return (
                            <tr key={index}>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>{product.description}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => onEdit(product.id)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => onDelete(product.id)}>Delete</button>
                                </td>
                                <td>
                                    <button onClick={() => onView(product.id)}>View</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default ListProduct;
