import React, { useContext } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext";

const PlaceOrder = () => {
  const { navigate } = useContext(ShopContext);
  return (
    <>
      <div className="place_order_container">
        <div>
          <div className="placeOrder_title">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
          <div>
            <form className="place_order_input">
              <div className="place_flex">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
              </div>
              <input type="email" placeholder="Email address" />
              <input type="text" placeholder="Street" />
              <div className="place_flex">
                <input type="number" placeholder="City" />
                <input type="text" placeholder="State" />
              </div>
              <div className="place_flex">
                <input type="number" placeholder="Zipcode" />
                <input type="text" placeholder="Country" />
              </div>
              <input type="number" placeholder="Phone" />
            </form>
          </div>
        </div>
        <div>
          <div>
            <CartTotal />
          </div>
          <div className="payment_container">
            <div className="payment_title">
              <Title text1={"PAYMENT"} text2={"METHOD"} />
            </div>
            <div className="payments_types">
              <div className="all_type_payments">
                <input type="radio" className="radio_btn" />
                <img src={assets.stripe_logo} alt="" />
              </div>
              <div className="all_type_payments">
                <input type="radio" className="radio_btn" />
                <img src={assets.razorpay_logo} alt="" />
              </div>
              <div className="all_type_payments">
                <input type="radio" className="radio_btn" />

                <p>cash on delivery</p>
              </div>
            </div>
          </div>
          <button className="placeOrder_btn" onClick={() => navigate("/order")}>
            place order
          </button>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
