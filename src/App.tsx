import * as React from 'react';
import './App.css';
import ProductMenu from "./pages/product/Crud/Product";
import CreateProduct from "./pages/product/Crud/CreateProduct";
import Products from "./pages/product/index"
import ViewProduct from "./pages/product/Crud/ViewProduct";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

const App: React.FC = () => {

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ProductMenu}/>
                    <Route exact path="/create" component={CreateProduct}/>
                    <Route exact path="/list" component={Products}/>
                    <Route exact path="/view/:id" component={ViewProduct}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
