import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { products, search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  // const [visible, setVisible] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname.includes("collection") && showSearch) {
  //     setVisible(true);
  //   } else {
  //     setVisible(false);
  //   }
  // }, [location]);

  // useEffect(() => {
  //   console.log(location.pathname);
  // }, [location]);
  return showSearch ? (
    <>
      <div className="search_bar_container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
        />
        <p onClick={() => setShowSearch(false)}>
          <ion-icon name="close-outline"></ion-icon>
        </p>
      </div>
    </>
  ) : null;
};

export default SearchBar;
