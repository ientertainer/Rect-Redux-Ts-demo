export interface IProduct{
    // Describe id of product
    id: number;
    // Describe name of product
    productName: string;
    // Describe quantity of product
    quantity: number;
    // Describe price of product
    price: number;
    // Description of product
    description: string;
}

export interface IProductReducer {
    productList: IProduct[]
};
