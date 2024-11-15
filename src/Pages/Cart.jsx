import React, { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import OurPolicy from "../Components/OurPolicy";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <>
      <div className="cart_super_container">
        <div className="cart_container">
          <div className="cart_titles">
            <Title text1={"YOUR"} text2={"CART"} />
          </div>
          <div className="cart_product_container">
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id === item._id
              );

              return (
                <div key={index}>
                  <hr />
                  <div className="cart_products">
                    <div className="cart_image">
                      <img src={productData.image[0]} alt="" />
                    </div>
                    <div>
                      <h1 className="cart_product_name">{productData.name}</h1>
                      <div className="cart_a_s">
                        <h3 className="cart_product_price">
                          {currency}
                          {productData.price}.00
                        </h3>
                        <button className="cart_size_btn">{item.size}</button>
                      </div>
                    </div>
                    <div>
                      <input
                        className="cart_input"
                        onChange={(e) =>
                          e.target.value === "" || e.target.value === "0"
                            ? null
                            : updateQuantity(
                                item._id,
                                item.size,
                                Number(e.target.value)
                              )
                        }
                        type="number"
                        min={1}
                        defaultValue={item.quantity}
                      />
                    </div>

                    <p
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      className="delete_btn"
                    >
                      <ion-icon name="trash-outline"></ion-icon>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="cart_cartTotal">
          <div>
            <CartTotal />
          </div>
          <button onClick={() => navigate("/place-order")} className="ptc_btn">
            proceed to checkout
          </button>
        </div>
      </div>
      <OurPolicy />
      <Footer />
    </>
  );
};

export default Cart;
