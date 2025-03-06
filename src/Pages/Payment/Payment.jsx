import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import Classes from "./payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { useContext } from "react";
import ProductCard from "../../Components/Product/ProductCard";
import {
  useStripe,
  useElements,
  CardElement
} from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat"; 

import { ClipLoader } from "react-spinners"; 

import { useNavigate } from "react-router";

function Payment() {
  const [{ basket }] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item?.amount + amount;
  }, 0);

  const total = basket?.reduce((amount, item) => {
    return item?.price * item?.amount + amount;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [carderror, setCarderror] = useState();
  const [processing, setProcessing] = useState(false);

  const handleChange = (e) => {
    console.log(e);

    e?.error?.message ? setCarderror(e?.error?.message) : setCarderror("");
    console.log(e)
  };

  // const handlePayment = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setProcessing(true);
  //     const response = await axiosInstance({
  //       method: "POST",
  //       url: `payment/create?total=${Total}`,
  //     });
  //     console.log(response.data);
  //     const clientSecret = response.data?.clientSecret;
  //     const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
  //       payment_method: {
  //         card: elements.getElement(CardElement),
  //       },
  //     });
  //     console.log(paymentIntent);

  //     await db
  //       .collection("users")
  //       .doc(user.uid)
  //       .collection("orders")
  //       .doc(paymentIntent.id);
  //     set({
  //       basket: basket,
  //       amount: paymentIntent.amount,
  //       created: paymentIntent.created,
  //     });
  //     setProcessing(false);
  //     navigate("/orders", { state: { msg: "You have Placed New Order" } });
  //   } catch (error) {
  //     console.log(error);
  //     setProcessing(false);
  //   }
  // };

  return (
    <Layout>
      <div className={Classes.payment_header}>
        Check Out ({totalItem} )items
      </div>
      <section className={Classes.payment}>
        <div className={Classes.flex}>
          <h3>Delivery Adress</h3>
          <div>
            <div>abc@domain.com</div>
            <div>Churchil street</div>
            <div>Addis Ababa</div>
          </div>
        </div>
        <hr />

        {/* order item mapping */}
        <div className={Classes.flex}>
          <h3>Review Items and Delivery</h3>
          <div>
            {basket?.map((item, index) => (
              <ProductCard product={item} key={index} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* payment card form */}
        <div className={Classes.flex}>
          <h3>Payment Methods</h3>
          <div className={Classes.payment_card_container}>
            <div className={Classes.payment_details}>
              <form action="" >
                {carderror && (
                  <small style={{ color: "red" }}>{carderror}</small>
                )}
                {/* card nuber checker on change */}
                <CardElement onChange={handleChange} />
                <div className={Classes.payment_price}>
                  <div>
                    {/* total price */}
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button >
                    
                       Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
