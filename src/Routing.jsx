import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";



const stripePromise = loadStripe('pk_test_51Qx344C2zgzqfpxhEDEJlBqkdex8eGScA62ahV1DLBgDQcc96zwbVrCCo2E1YvLJ16z6puKkDb2FcGF7OpgQuLiQ00L7wvy2MR');


function Routing() {
  // stripe public key
  
  return (
    // creating routes clickable components using react router
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        {/* stripe card element and loader */}
        <Route
          path="/payments"
          element={
            <ProtectedRoute msg={"You must log in to pay"} redirect= {'/payments'}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
            </ProtectedRoute>
          }
        />
        <Route path="/orders" element={<ProtectedRoute msg ={"You must login to access orders"} redirect = {"/orders"}><Orders/></ProtectedRoute>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryTitle" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Routing;
