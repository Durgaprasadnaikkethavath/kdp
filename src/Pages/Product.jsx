import React, { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import OurPolicy from "../Components/OurPolicy";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../Components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState();

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);
  return productData ? (
    <div>
      <div className="product_page_container">
        <div>
          {/** Product Data */}
          <div className="product_all_details">
            {/** ------------------- Product Images ------------------- */}

            {/** type of images */}
            <div>
              {productData.image.map((item, index) => (
                <img
                  className="image_types"
                  onClick={() => setImage(item)}
                  key={index}
                  src={item}
                />
              ))}
            </div>

            {/** single main image */}
            <div className="main_image">
              <img src={image} alt="product image" />
            </div>

            {/** product Details */}

            <div className="product_details_container">
              <h1 className="product_title">{productData.name}</h1>
              <div className="product_rating">
                <div>
                  <img src={assets.star_icon} alt="" className="start_icon" />
                  <img src={assets.star_icon} alt="" className="start_icon" />
                  <img src={assets.star_icon} alt="" className="start_icon" />
                  <img src={assets.star_icon} alt="" className="start_icon" />
                  <img
                    src={assets.star_dull_icon}
                    alt=""
                    className="start_icon"
                  />
                </div>
                <h2 className="rating_total">(147)</h2>
              </div>
              <h2 className="item_price">
                {currency}
                {productData.price}
              </h2>
              <p className="item_description">{productData.description}</p>
              <div className="product_size">
                <h3>Select Size</h3>
                <div className="type_of_product_sizes">
                  {productData.sizes.map((item, index) => (
                    <button
                      className="size_btn"
                      onClick={() => setSize(item)}
                      key={index}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={() => addToCart(productData._id, size)}
                className="addToCart_btn"
              >
                Add To Cart
              </button>
              <hr />
              <div className="product_quality">
                <p style={{ marginTop: "30px" }}>100% Original product.</p>
                <p>Cash on delivery is available on this product.</p>
                <p>Easy return and exchange policy within 7 days.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="product_description">
          <div className="description_part">
            <h2 className="des_title">Description</h2>
            <p className="des_rating">Reviews(147)</p>
          </div>
          <div className="description_para">
            <p>
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
            <p style={{ marginTop: "20px" }}>
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </div>
        </div>

        {/** Related Products */}
        <div>
          <RelatedProducts
            category={productData.category}
            subCategory={productData.subCategory}
          />
        </div>
      </div>
      <OurPolicy />
      <Footer />
    </div>
  ) : (
    <div className="product_opacity"></div>
  );
};

export default Product;
