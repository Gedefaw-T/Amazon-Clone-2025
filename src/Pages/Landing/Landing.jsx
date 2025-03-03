import React from 'react'
import CarouselEffect from '../../Components/Carousel/Carousel'
import Category from '../../Components/Category/Category'
import Product from '../../Components/Product/Product'
import Layout from "../../Components/Layout/Layout"

function Landing() {
  return (
    // passing header from layout to landing using props
    <Layout>
      <CarouselEffect/>
      <Category/>
      <Product/>
    </Layout>
  )
}

export default Landing