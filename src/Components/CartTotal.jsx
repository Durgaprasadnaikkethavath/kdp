import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, deliver_fee, getCartAmount } = useContext(ShopContext);
  return (
    <>
      <div className="cartTotal_container">
        <div className="carttotal_title">
          <Title text1={"CART"} text2={"TOTALS"} />
        </div>
        <div>
          <div className="subtotal">
            <p>Subtotal</p>
            <p>
              {currency}
              {getCartAmount()}.00
            </p>
          </div>
          <hr />
          <div className="subtotal">
            <p>Shipping Fee</p>
            <p>{deliver_fee}.00</p>
          </div>
          <hr />
          <div className="subtotal">
            <p>Total</p>
            <p>
              {currency}
              {getCartAmount()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
