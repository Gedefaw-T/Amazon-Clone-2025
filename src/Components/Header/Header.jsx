import React from 'react'
import Classes from "./Header.module.css";
import AmazonLogo from "/AmazonLogo.png";

import { CiLocationOn } from "react-icons/ci";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';

function Header() {
  return (
    <section className={Classes.fixed}>
    <section className={Classes.header_container}>
      <div className={Classes.logo_container}>
        <a href="/">
       
          <img src={AmazonLogo} alt="Amazon Logo" />
        </a>

        <div className={Classes.delivery}>
          <div>
          
            <span>
             
              <CiLocationOn />
            </span>
          </div>
          <div>
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>
      </div>

      <div className={Classes.search}>
        <select className={Classes.select}>
          <option value="All">All</option>

          {/* <option value="Arts">Arts & Crafts</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Baby">Baby</option>
                  <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                  <option value="Books">Books</option>
                  <option value="Boy's Fashion">Boy's Fashion</option>
                  <option value="Computers">Computers</option>
                  <option value="Deals">Deals</option>
                  <option value="Digital Music">Digital Music</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Girl's Fashion">Girl's Fashion</option>
                  <option value="Health & House Hold">Health & HouseHold</option>
                  <option value="House & Kithce">House & Kithcen</option>
                  <option value="Industrial & Scientific">Industrial & Scientific</option>
                  <option value="Kindle Store">Kindle Store</option>
                  <option value="Luggage">Luggage</option>
                  <option value="Men's Fashion">Men's Fashion</option>
                  <option value="Movies & TV">Movies & TV</option>
                  <option value="Movies, CDs & Vinyl">Movies, CDs & Vinyl</option>
                  <option value="Pet Suppplies">Pet Suppplies</option>
                  <option value="Prime Video">Prime Video</option>
                  <option value="Software">Software</option>
                  <option value="Sports & Outdoors">Sports & Outdoors</option>
                  <option value="Tools & Home Improvement">Tools & Home Improvement</option>
                  <option value="Toys & Games">Toys & Games</option>
                  <option value="Video Games">Video Games</option>
                  <option value="Women's fashion">Women's fashion</option> */}
        </select>

        <input
          type="text"
          placeholder="Search Amazon"
          name="search"
          size="50"
        />
        <BsSearch size={25} />
      </div>
      <div className={Classes.order_container}>
        <a href="" className={Classes.language}>
          
          <img
            src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg"
            alt="US"
            hieght="6px"
            width="8px"
          />
          <select name="" id="">
            <option value="">EN</option>
          </select>
        </a>
        <a href="">
          <p>Sign In</p>
          <span >Account & Lists</span>
        </a>
        <a href="">
         <p>Returns</p>
         <span>& Orders</span>
        </a>

        <a href="/cart" className={Classes.cart}>
        <div><BiCart size={35} />
        <span>0</span></div>
          
          <div>Cart</div>
        </a>
      </div>
    </section>
    
      <LowerHeader />
    
  </section>
  )
}

export default Header
