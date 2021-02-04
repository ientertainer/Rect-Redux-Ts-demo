import * as React from "react";
import {NavLink} from "react-router-dom";

const Product = () => {
    return (
        <div>
            <h3>
                <NavLink to={"/list"}>View Products</NavLink><br/>
                <NavLink to={"/create"}>Create Products</NavLink> <br/>
            </h3>
        </div>
    );
}

export default Product;
