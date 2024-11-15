import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <>
      <Link to={`/product/${id}`} className="product_items">
        <div className="product_items">
          <div className="product_img">
            <img src={image[0]} alt="" />
          </div>
          <p className="product_name">{name}</p>
          <p className="product_price">
            {currency}
            {price}
          </p>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
