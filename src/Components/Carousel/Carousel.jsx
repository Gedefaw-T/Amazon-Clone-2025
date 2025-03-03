import React from 'react'
import {Carousel} from "react-responsive-carousel"

import CarouselStyle from "./Carousel.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {img} from './Images/Data';


function CarouselEffect() {
  return (
    <div>
       <Carousel
      autoPlay= {true}
      infiniteLoop={true}
      showIndicators ={false}
      showThumbs = {false}
         showArrows={true} 
        >
       
        {
            img.map((img, index)=>{
              
                return <img  key = {index} className={CarouselStyle.carousel_image} src = {img} />
            })
        }

      </Carousel>
      <div className={CarouselStyle.hero_img}></div>
      
    </div>

  )
}

export default CarouselEffect
