
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductCard from '../../Components/Product/ProductCard';
import Layout from '../../Components/Layout/Layout';
import axios from 'axios';
import { productUrl } from '../../Components/API/Endpoints';
import Load from '../../Components/Load/Load';
function ProductDetail() {
  // accessing query parametr from using product id from routing path by useParams
  const {productId} = useParams();
  
  // rendering each products using usestate
  const [product, setProduct] = useState({});
  // rendering loading react spinner using useState
  const [loader, setLoader] = useState(false);
  
  useEffect(()=>{
    setLoader(true)
axios.get(`${productUrl}/products/${productId}`)
.then((res)=>{
  setProduct(res.data)
  setLoader(false)
})
  .catch((err)=>{
  console.log(err)
  setLoader(loader)
  })
},[])
 
  return (
    <Layout>
      
     { loader?(<Load/>) : 
      <ProductCard product= {product} flex = {true} descriptionRend ={true}  renderAdd ={true}  />}
    </Layout>
  )
}

export default ProductDetail
