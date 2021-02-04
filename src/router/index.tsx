import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProductMenu from "../component/product/Crud/Product";
import LandingPage from "../component/LandingPage/index";
import ProductList from "../component/ProductList/ProductList";
import CreateProduct from "../component/product/Crud/CreateProduct";
import Products from "../component/product";
import ViewProduct from "../component/product/Crud/ViewProduct";
import * as React from "react";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/create" component={CreateProduct}/>
                <Route exact path="/list" component={ProductList}/>
                <Route exact path="/view/:id" component={ViewProduct}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
