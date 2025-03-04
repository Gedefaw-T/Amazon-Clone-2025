import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router";
import Classes from "./Cart.module.css";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  // total price calculator using array.reuce method to add the exsting price to the curent
  const total = basket.reduce((amount, item) => {
    return item.price*item.amount + amount;
  }, 0);
  console.log(total);

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
                </section>
              );
            })
          )}
        </div>

        {/* adding subtotal items and total price  */}
        {basket?.length !== 0 && (
          <div className={Classes.subTotal}>
            <div>
              <p>Subtotal ({basket?.length} items)</p>
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
