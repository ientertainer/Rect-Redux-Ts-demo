import * as React from "react";
import { useHistory } from "react-router-dom";
import { IProduct } from "../../store/interface/Product";
import {useDispatch, useSelector} from "react-redux";
import {createNewProduct, deleteProduct, editProduct, selectProduct} from "../../store/actions/ProductActions";
import Card from "../Card/Card";
import './ProductListStyle.css'
import {IRootReducer} from "../../store/reducers";
import Button from "../Button/Button";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper, Modal, TextField, FormControl
} from '@material-ui/core'
import {useState} from "react";

// Register all props of component here
interface IProductListProps {

}

const ProductList = (props: IProductListProps) => {

    // useSelector redux hook to select state
    const productReducer = useSelector( (state: IRootReducer) => state.productReducer);

    // useDispatch redux hook to dispatch actions
    const dispatch = useDispatch();

    // useHistory routing hook to push new rout
    const history = useHistory();

    const [ modalVisible, setModalVisible ] = useState(false);
    const [ selectedProduct, setSelectedProduct ] = useState<IProduct | any>(null);
    const [ selectedAction, setSelectedAction ] = useState<any>(null);

    /**
     * Delete product based on productId
     * @param productId
     */
    const onDelete = (productId: number) => {

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
        setSelectedAction('create')
        const create: IProduct = {
            id: 0,
            productName: '',
            description: '',
            price: 0,
            quantity: 0
        }
        setSelectedProduct(create);
        setModalVisible(true);
    };

    /**
     * View Product Details
     * @param productId
     */
    const onView = (productId: number) => {
        history.push(`/view/${productId}`);
    };

    const productAction = (action: string, productData: IProduct) => {
        setSelectedAction(action)
        setSelectedProduct(productData)
        setModalVisible(true);
    }

    const modalClose = () => {
        setModalVisible(false)
        setSelectedProduct(null)
        setSelectedAction(null)
    }

    const updateSelectedProduct = (field: string, value: string) => {
        const newData: any = {...selectedProduct}
        newData[field] = value
        setSelectedProduct(newData);
    }

    const submitHandler = () => {
        switch (selectedAction) {
            case 'edit':
                dispatch(editProduct(selectedProduct));
                break;
            case 'delete':
                dispatch(deleteProduct(selectedProduct?.id));
                break;
            case 'create':
                dispatch(createNewProduct(selectedProduct))
                break;
        }
        modalClose()
    }

    return (
        <div className={"listContainer"}>
            <Card title={"List of Product"} variant={'h4'} align={'left'}>
                <Button
                    align={'flex-end'}
                    label={"Create Product"}
                    onClick={createProduct}
                    variant={"outlined"}
                    color={'secondary'}
                    size={'small'}
                />
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align={'center'}>#</TableCell>
                                <TableCell align={'center'}>Product Name</TableCell>
                                <TableCell align={'center'}>Description</TableCell>
                                <TableCell align={'center'}>Quantity</TableCell>
                                <TableCell align={'center'}>Price</TableCell>
                                <TableCell align={'center'}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productReducer.productList.map((product: IProduct, index: number) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell align={'center'}>{product.id}</TableCell>
                                            <TableCell align={'center'}>{product.productName}</TableCell>
                                            <TableCell align={'center'}>{product.description}</TableCell>
                                            <TableCell align={'center'}>{product.quantity}</TableCell>
                                            <TableCell align={'center'}>{product.price}</TableCell>
                                            <TableCell colSpan={2} align={'center'}>
                                                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                                    <Button
                                                        label={'Edit'}
                                                        onClick={() => productAction('edit', product)}
                                                        size={'small'}
                                                        variant={'outlined'}
                                                        color={'primary'}
                                                        align={'center'}
                                                    />
                                                    <Button
                                                        label={'Delete'}
                                                        onClick={() => productAction('delete', product)}
                                                        size={'small'}
                                                        variant={'outlined'}
                                                        color={'secondary'}
                                                        align={'center'}
                                                    />
                                                    <Button
                                                        label={'View'}
                                                        // onClick={() => productAction('view', product)}
                                                        onClick={() => onView(product.id)}
                                                        size={'small'}
                                                        variant={'outlined'}
                                                        color={'primary'}
                                                        align={'center'}
                                                    />
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open={modalVisible}
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                style={{
                    display: 'absolute',
                    top: 20,
                    left: '30vw',
                    right: '30vw',
                    width: '40vw',
                }}
                onClose={modalClose}
            >
                <div style={{
                    background: 'white',
                    borderRadius: 10,
                    padding: '10px 20px',
                }}>
                    <h2>{selectedAction === 'edit' ? 'Edit' : 'Delete'} Product</h2>
                    {selectedAction === 'delete' && 'Are you sure to delete selected product?'}
                    {selectedAction === 'edit' && <>
                        <FormControl fullWidth={true} margin={'dense'}>
                            <TextField
                                label="Product Name"
                                variant="outlined"
                                value={selectedProduct?.productName}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateSelectedProduct('productName', event.target.value)}
                            />
                        </FormControl>
                        <FormControl fullWidth={true} margin={'dense'}>
                            <TextField
                                label="Description"
                                variant="outlined"
                                value={selectedProduct?.description}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateSelectedProduct('description', event.target.value)}
                            />
                        </FormControl>
                        <FormControl fullWidth={true} margin={'dense'}>
                            <TextField
                                label="Quantity"
                                variant="outlined"
                                value={selectedProduct?.quantity}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateSelectedProduct('quantity', event.target.value)}
                            />
                        </FormControl>
                        <FormControl fullWidth={true} margin={'dense'}>
                            <TextField
                                label="Price"
                                variant="outlined"
                                inputMode={"numeric"}
                                value={selectedProduct?.price}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => updateSelectedProduct('price', event.target.value)}
                            />
                        </FormControl>
                    </>}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        marginTop: 10
                    }}>
                        <Button
                            label={selectedAction}
                            variant={'outlined'}
                            color={'secondary'}
                            size={'small'}
                            onClick={submitHandler}
                        />
                        <Button
                            label={"Cancel"}
                            variant={'outlined'}
                            color={'secondary'}
                            size={'small'}
                            onClick={modalClose}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ProductList;
