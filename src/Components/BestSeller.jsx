import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);

  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, []);

  return (
    <>
      <div className="bestseller_container">
        <div className="bestseller_heading">
          <Title text1={"BEST"} text2={"SELLER"} />
          <p className="bestseller_para">
            The BestSeller collection features trendy, high-quality fashion
            pieces designed to elevate your style with the latest looks of the
            season.
          </p>
        </div>
        <div className="bestseller_products">
          {bestSeller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BestSeller;
