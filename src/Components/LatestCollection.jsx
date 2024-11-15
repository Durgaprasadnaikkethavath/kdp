import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  // console.log(products);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <>
      <div className="latestProduct_container">
        <div className="latest_heading">
          <Title text1={"LATEST"} text2={"COLLECTIONS"} />
          <p className="latest_para">
            The latest fashion collections focus on bold colors, sustainable
            materials, and versatile styles, blending luxury with everyday
            comfort.
          </p>
        </div>

        <div className="latest_products">
          {latestProducts.map((item, index) => (
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

export default LatestCollection;
