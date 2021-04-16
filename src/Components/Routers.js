import React from "react";
import CartPage from "../Pages/CartPage";
import DetailsPage from "../Pages/DetailsPage";
import HomePage from "../Pages/HomePage";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import ProductsPage from "../Pages/ProductsPage";
import { Switch, Route } from "react-router-dom";
import PaymentPage from "../Pages/PaymentPage";

export default function Routers() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/details" component={ProductsPage} />
        <Route path="/details/:id" component={DetailsPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}
