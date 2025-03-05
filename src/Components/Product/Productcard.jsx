import React, { useContext } from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import Classes from "../Product/Product.module.css";
import { Link } from "react-router";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Pages/Utility/ActionType";

function Productcard({ product, flex, descriptionRend, renderAdd }) {
  // destructure data from fakestore api and passed as props
  const { image, id, title, price, rating, category, description } = product;
  const [state, dispatch] = useContext(DataContext);
  // function for adding to cart bind to click actvity
  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, id, title, rating, price, category, description },
    });
  };

  return (
    <div
      className={`${Classes.productcard_container} ${
        flex ? Classes.product_flexed : " "
      }`}
    >
      <Link to={`/products/${id}`}>
        <img className={Classes.image_container} src={image} alt="" />
      </Link>
      <div>
        <h5>{title}</h5>
        {descriptionRend && (
          <div style={{ maxWidth: "500px" }}>{description}</div>
        )}
        <div className={Classes.rating}>
          {/* rating icon imported from material icon */}
          <Rating value={rating?.rate} precision={0.1} />
          <small>{rating?.count}</small>
        </div>

        <div>
          {/* currency format passed as props */}
          <CurrencyFormat amount={price} />
        </div>

        {renderAdd && (
          <button className={Classes.button} onClick={addToCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Productcard;
