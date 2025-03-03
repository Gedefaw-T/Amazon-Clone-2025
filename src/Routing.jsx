import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Landing from "./Pages/Landing/Landing"
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";

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
        </Routes>
    </Router>
  );
}

export default Routing;
