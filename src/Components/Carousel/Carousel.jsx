import React from 'react'
import {Carousel} from "react-responsive-carousel"

import CarouselStyle from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {img} from './Images/Data';


function CarouselEffect() {
  return (
    <div>
      {/* sliding image using carousel effect */}
       <Carousel
      autoPlay= {true}
      infiniteLoop={true}
      showIndicators ={false}
      showThumbs = {false}
         showArrows={true} 
        >
       
       {/* accessing images from array img exported from data jsx destructured data by array.map */}
        {
            img.map((img, index)=>{
              
                return <img  key = {index} className={CarouselStyle.carousel_image} src = {img} />
            })
        }

      </Carousel>

      {/* creating place fore fade setting */}
      <div className={CarouselStyle.hero_img}></div>
      
    </div>

  )
}

export default CarouselEffect
