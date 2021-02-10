import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "../component/LandingPage/index";
import ProductList from "../component/ProductList/ProductList";
import * as React from "react";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/list" component={ProductList}/>
                <Route exact path="/list/:new" component={ProductList}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
