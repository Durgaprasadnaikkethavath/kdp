import React, { useContext, useEffect, useState } from "react";
import Footer from "../Components/Footer";
import OurPolicy from "../Components/OurPolicy";
import { ShopContext } from "../Context/ShopContext";
import ProductItem from "../Components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategories = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategories = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);
  return (
    <>
      <div>
        <div className="collection_container">
          <div className="collection_aside">
            <h1 className="filter_heading">Filters</h1>
            <div className="categories">
              <h3 className="categories_heading">categories</h3>
              <div className="categories_type">
                <input
                  type="checkbox"
                  value={"Men"}
                  onChange={toggleCategories}
                />
                <p>Men</p>
              </div>
              <div className="categories_type">
                <input
                  type="checkbox"
                  value={"Women"}
                  onChange={toggleCategories}
                />
                <p>Women</p>
              </div>
              <div className="categories_type">
                <input
                  type="checkbox"
                  value={"Kids"}
                  onChange={toggleCategories}
                />
                <p>Kids</p>
              </div>
            </div>

            <div className="categories">
              <h3 className="categories_heading">Types</h3>
              <div className="categories_type">
                <input
                  type="checkbox"
                  value={"Topwear"}
                  onChange={toggleSubCategories}
                />
                <p>Topwear</p>
              </div>
              <div className="categories_type">
                <input
                  type="checkbox"
                  value={"Bottomwear"}
                  onChange={toggleSubCategories}
                />
                <p>Bottomwear</p>
              </div>
              <div className="categories_type">
                <input
                  type="checkbox"
                  value={"Winterwear"}
                  onChange={toggleSubCategories}
                />
                <p>Winterwear</p>
              </div>
            </div>
          </div>
          <div className="collection_part">
            <div className="collection_title">
              <p className="all_collection_heading">ALL COLLECTIONS</p>
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="collection_select"
              >
                <option value={"relavent"}>Sort by: Relavent</option>
                <option value={"low-high"}>Sort by: Low to High</option>
                <option value={"high-low"}>Sort by: High to Low</option>
              </select>
            </div>

            <div className="collection_products">
              {filterProducts.map((item, index) => (
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
        </div>
      </div>
      <OurPolicy />
      <Footer />
    </>
  );
};

export default Collection;
