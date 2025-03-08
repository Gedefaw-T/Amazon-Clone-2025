import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import Classes from "./payment.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { useContext } from "react";
import ProductCard from "../../Components/Product/ProductCard";
import { axiosInstance } from "../../Components/API/Axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { db } from "../Utility/Firebase";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router";
import { doc, setDoc } from "firebase/firestore";
import { Type } from '../Utility/ActionType';


function Payment() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  // console.log(user)
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
    // console.log(e);

    e?.error?.message ? setCarderror(e?.error?.message) : setCarderror("");
  };

  // handling payment

  const handlePayment = async (e) => {
    e.preventDefault();
    
    try {
      // contact to client secret backend functions
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
      // console.log(response.data);

      const clientSecret = response.data?.clientSecret;

      // payment confirmation using stripe
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      console.log(paymentIntent);

      // firestrore data order using V9
      await setDoc(doc(db, "users", user.uid, "orders", paymentIntent.id), {
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });
      // empty the basket 
dispatch({type:Type.EMPTY_BASKET})

      // order firestore check process
      // setIsSubmitting(false);
      setProcessing(false);
      navigate("/orders");
    } catch (error) {
      console.log(error);
      setProcessing(false);
      // setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className={Classes.payment_header}>
        Check Out ({totalItem} )items
      </div>
      <section className={Classes.payment}>
        <div className={Classes.flex}>
          <h3>Delivery Adress</h3>
          <div>
            <div>email</div>
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
              <form action="" onSubmit={handlePayment}>
                {carderror && (
                  <small style={{ color: "red" }}>{carderror}</small>
                )}
                {/* card number checker on change */}
                <CardElement onChange={handleChange} />
                <div className={Classes.payment_price}>
                  <div>
                    {/* total price */}
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order |</p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button type="submit" >
                    {processing ? (
                      <div className={Classes.loader}>
                        <ClipLoader color="gray" size={12} />
                        <p>Please Wait ...</p>
                      </div>
                    ) : (
                      "Pay Now"
                    )}
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
