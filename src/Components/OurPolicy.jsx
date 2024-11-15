import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  const { exchange_icon, quality_icon, support_img } = assets;
  return (
    <>
      <div className="policy_container">
        <div className="policy_types">
          <img src={exchange_icon} alt="exchanges icon" />
          <h4>Easy Exchange Policy</h4>
          <p>We Offer hassle free exchange policy</p>
        </div>
        <div className="policy_types">
          <img src={quality_icon} alt="return icon" />
          <h4>7 Days Return Policy</h4>
          <p>We provide 7 days return policy</p>
        </div>
        <div className="policy_types">
          <img src={support_img} alt="support icon" />
          <h4>Best Customer Support</h4>
          <p>We provide 24/7 customer support</p>
        </div>
      </div>
    </>
  );
};

export default OurPolicy;
