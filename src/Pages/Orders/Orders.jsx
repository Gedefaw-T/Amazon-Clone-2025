import React, { useContext, useEffect, useState } from "react";
import { db } from "../Utility/Firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import Layout from "../../Components/Layout/Layout";
import Classes from "./Orders.module.css";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import Productcard from "../../Components/Product/ProductCard";

function Orders() {
  const [{ user, basket }, dispatch] = useContext(DataContext);

  const [orders, setOrders] = useState([]);
  // fetching orders from firestore V9
  useEffect(() => {
    if (user) {
      const userOrdersCollectionRef = collection(
        db,
        "users",
        user.uid,
        "orders"
      );
      // console.log(userOrdersCollectionRef)
      const quersyOrders = query(
        userOrdersCollectionRef,
        orderBy("created", "desc")
      );
      console.log(quersyOrders);
      const unsubscribe = onSnapshot(quersyOrders, (snapShot) => {
        const fetchOrders = snapShot.docs.map((doc) => ({
          orderid: doc.id,
          ordersData: doc.data(),
        }));
        setOrders(fetchOrders);
      });
      return () => unsubscribe();
    } else {
      setOrders();
    }
  }, []);

  return (
    <Layout>
      <section className={Classes.container}>
        <div className={Classes.orders_container}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && (
            <div style={{ padding: "20px" }}>No Orders Yet</div>
          )}
          {console.log(orders)}
          <div>
            {/* mapping ordererd products */}
            {orders?.map((eachOrder, i) => {
            
              return (
                <div key={i}>
                  <hr />
                  <p>Order id: {eachOrder?.orderid}</p>
                  {eachOrder?.ordersData?.basket?.map((singleorder) => {
                   
                    return (
                      <Productcard
                        flex={true}
                        product={singleorder}
                        key={singleorder.id}
                      />
                     
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
