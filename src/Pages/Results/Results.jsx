import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router'
import axios from 'axios';
import {productUrl} from "../../Components/API/Endpoints"
import Classes from "./Results.module.css" 
import ProductCard from '../../Components/Product/ProductCard';
import Load from '../../Components/Load/Load';
function Results() {
  const [results, setResults] = useState();
  const [loader, setLoader] = useState(false);
  const {categoryTitle} = useParams();
  // console.log(categoryTitle);
  useEffect(()=>{
  axios.get(`${productUrl}/products/category/${categoryTitle}`)
  .then((res)=>{
    setResults(res.data);
    setLoader(false)
  }).catch((err)=>{console.log(err )
    setLoader(loader)
  })
 },[])
  return (
    <Layout>
   <section>
      <h1 style ={{padding: "30px"}}>Results</h1> 
      <p style={{padding:"30px"}}>  Category/{categoryTitle}</p>
      <hr/>
      {/* getting loading spinners applying if data is pending using ternary operator */}
      {loader?(<Load/>):
      <div className={Classes.products_container}>
      {/* getting produtCard data using props and array.map */}
    {results?.map((product, index)=>{
            return <ProductCard key = {index} product = {product} renderAdd ={true}  />
        })
      }
      
      </div>
      }
    </section>
    
    </Layout>
  )
}

export default Results;
