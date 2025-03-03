import React from 'react'
import Classes from './Category.module.css'
import { Link } from 'react-router'

function CategoryCard({data}) {
  return (

    // getting data category using props from category
    <div className={Classes.Category}>
    <Link to = {`/category/${data.category}`}>
      <span><h2>{data?.Title}</h2></span>
     
      <img className = {Classes.Category_image}    src={data.image} alt="" />
      <p>{data.description}</p>
    </Link>
   
  </div>
  )
}

export default CategoryCard
