import React, { useContext } from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import Classes from "../Product/Product.module.css";

function Productcard({product}) {
    // destructure data from fakestore api and passed as props
    const { image, id, title, price, rating, category, description } = product;
  return (
    <div className={Classes.productcard_container}>
      <a href="">
        <img className={Classes.image_container} src={image} alt="" />
      </a>
      <div>
        <h5>{title}</h5>
        
        <div className={Classes.rating}>
            {/* rating icon imported from material icon */}
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>

        <div>
          {/* currency format passed as props */}
          <CurrencyFormat amount={price} />
        </div>
       
          <button className={Classes.button} >
            Add to Cart
          </button>
        
      </div>
    </div>
  );
}

export default Productcard;
