import React from 'react'
import Classes from './Category.module.css'

function CategoryCard({data}) {
  return (

    // getting data category using props from category
    <div className={Classes.Category}>
    <a href={data.Title}>
      <span><h2>{data.Title}</h2></span>
     
      <img className = {Classes.Category_image}    src={data.image} alt="" />
      <p>{data.description}</p>
    </a>
   
  </div>
  )
}

export default CategoryCard
