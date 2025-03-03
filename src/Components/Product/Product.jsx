import React, { useEffect, useState } from "react";
import axios from "axios";

import Classes from "../Product/Product.module.css";
import Productcard from "./ProductCard";

function Product() {
  // creating state
  const [products, setProducts] = useState();
  // using axios promise data from fakestoreapi and updating using useEffect
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className={Classes.products_container}>
      {/* calling the data using map method from states */}
      {products?.map((singleProduct, id) => {
        // passing data to child component using props
        return <Productcard key={id} product={singleProduct} />;
      })}
    </section>
  );
}

export default Product;
