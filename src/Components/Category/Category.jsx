import React from 'react'
import CategoryCard from './CategoryCard'
import Classes from './Category.module.css'
import {CategoryInfo} from "./CategoryData"

export default function Category() {
  return (

    // getting each card  data using from destructured Category data  and using  array.map method and
    //  passed to child component
    <div className={Classes.Category_Container}>
    {
  CategoryInfo.map((infos, index)=>{
   return <CategoryCard key = {index} data ={infos}  />
  
  })
}
</div>
  )
}
