import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);

  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();

      productCopy = productCopy.filter((item) => category === item.category);

      productCopy = productCopy.filter(
        (item) => subCategory === item.subCategory
      );

      setRelated(productCopy.slice(0, 5));
    }
  }, [products]);
  return (
    <>
      <div className="related_heading_part">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="related_products">
        {related.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default RelatedProducts;
