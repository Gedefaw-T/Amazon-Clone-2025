import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router";
import Classes from "./Cart.module.css";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Type } from "../../Pages/Utility/ActionType";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  // total price calculator using array.reuce method to add the exsting price to the curent
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  console.log(total);

  const totalItem = basket?.reduce((amount, item) => {
    return (item?.amount || 0) + amount;
  }, 0);

  // function to add items to the existing item in the basket
  const Increament = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  // function to remove items from basket

  const Decreament = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <Layout>
      <section className={Classes.container}>
        <div className={Classes.cart_container}>
          <h2>hello</h2>
          <h3>Your Shoping Cart</h3>
          <hr />

          {/* displaying each products dded to basket in cart page */}
          {basket?.length == 0 ? (
            <p>Opps ! No items in your Cart</p>
          ) : (
            basket?.map((item, id) => {
              return (
                <section key={id} className={Classes.cart_product}>
                  <ProductCard
                    key={id}
                    renderAdd={false}
                    product={item}
                    descriptionRend={true}
                    flex={true}
                  />

                  <div className={Classes.btn_container}>
                    <button
                      className={Classes.btn}
                      onClick={() => Increament(item)}
                    >
                      <ArrowDropUpIcon size={30} />
                    </button>
                    <span>{item?.amount}</span>
                    <button
                      className={Classes.btn}
                      onClick={() => Decreament(item.id)}
                    >
                      <ArrowDropDownIcon size={30} />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>

        {/* adding subtotal items and total price  */}
        {basket?.length !== 0 && (
          <div className={Classes.subTotal}>
            <div>
              <p>Subtotal ({totalItem} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <div>
              <span>
                <input type="checkbox" />
              </span>
              <small>This Order Conatains a gift</small>
            </div>
            <Link to="/payments"> Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
