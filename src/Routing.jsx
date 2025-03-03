import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Landing from "./Pages/Landing/Landing"
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail"

function Routing() {
  return (
    // creating routes clickable components using react router
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path ="/category/:categoryTitle" element ={<Results/>}/>
        <Route path="/products/:productId" element= {<ProductDetail/>}/>
        </Routes>
    </Router>
  );
}

export default Routing;
