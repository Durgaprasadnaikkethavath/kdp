import React from "react";
import { assets } from "../assets/assets";
const Hero = () => {
  return (
    <>
      <div className="hero_container">
        <div className="hero_title">
          <div className="hero_part_1">
            <div className="hero_our">
              <p className="seller_part"></p>
              <p className="seller_name">OUR BESTSELLER</p>
            </div>
            <h1 className="hero_latest">Latest Arrivals</h1>
            <div className="hero_our">
              <p className="seller_name">SHOP NOW</p>
              <p className="seller_part"></p>
            </div>
          </div>
        </div>
        <div className="hero_part_2">
          <img src={assets.hero_3} alt="hero images" className="hero_image" />
        </div>
      </div>
    </>
  );
};

export default Hero;
