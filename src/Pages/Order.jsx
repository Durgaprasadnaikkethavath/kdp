import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Footer from "../Components/Footer";
import OurPolicy from "../Components/OurPolicy";
import Title from "../Components/Title";

const Order = () => {
  const { currency, products } = useContext(ShopContext);
  return (
    <>
      <div className="order_container">
        <div className="order_title">
          <Title text1={"MY"} text2={"ORDER"} />
        </div>
        <hr />
        <div className="order_products">
          {products.slice(1, 4).map((item, index) => (
            <div key={index} className="order_details">
              <img src={item.image} alt="" />
              <div>
                <h1 className="order_product_name"> {item.name}</h1>
                <div className="order_all_cat">
                  <p>
                    {currency}
                    {item.price}
                  </p>
                  <p>size: M</p>
                </div>
                <div className="order_all_cat">
                  <p>quantity: 1</p>
                  <p>Date: 25-12-2024</p>
                </div>
              </div>
              <div className="order_ship">
                <p className="order_green"></p>
                <p>Ready To Ship</p>
              </div>
              <button className="track_btn">Track Order</button>
            </div>
          ))}
        </div>
      </div>
      <OurPolicy />
      <Footer />
    </>
  );
};

export default Order;
