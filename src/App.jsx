import React from "react";
import Header from "./Components/Header/Header";
import CarouselEffect from "./Components/Carousel/Carousel";
import Category from "./Components/Category/Category";
import Product from "./Components/Product/Product";

function App() {
  return (
    <>
      <Header />

      <CarouselEffect />
      <Category/>
      <Product/>

    </>
  );
}

export default App;
