import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
// import { assets } from "../assets/assets";
import Offer from "./Offer";

const Navbar = () => {
  const { getCartCount } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const { setShowSearch } = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Offer />
      <div className="navbar_container">
        <Link to="/" className="heading_link">
          <h1 className="tinos-regular tinos-bold tinos-regular-italic tinos-bold-italic">
            kdpn mart
          </h1>
        </Link>
        <ul className="navbar_1">
          <NavLink to="/" className="nav_link">
            Home
          </NavLink>
          <NavLink to="/collection" className="nav_link">
            Collection
          </NavLink>
          <NavLink to="/about" className="nav_link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav_link">
            Contact
          </NavLink>
        </ul>
        <div className="navbar_2">
          <p onClick={() => setShowSearch(true)} className="search_icon_nav">
            <ion-icon name="search-outline"></ion-icon>
          </p>
          <div className="navbar_person">
            <p>
              <ion-icon name="person-outline"></ion-icon>
            </p>
            <div className="navbar_sidebar">
              <p>My Profile</p>
              <p>Orders</p>
              <p>Logout</p>
            </div>
          </div>

          <Link to="/cart" className="cart">
            <p>
              <ion-icon name="cart-outline"></ion-icon>
              <span className="cart_count">{getCartCount()}</span>
            </p>
          </Link>
        </div>
        <div className="menubar">
          <div className="navbar-toggle" onClick={toggleMenu}>
            {isMenuOpen ? "X" : "Menu"}
          </div>
          {/* Conditional Rendering of Menu */}
          <div className="open_menu_bar">
            {isMenuOpen && (
              <ul className="menu_links">
                <NavLink to="#" className="nav_link">
                  My Profile
                </NavLink>
                <NavLink to="/order" className="nav_link">
                  Orders
                </NavLink>
                <NavLink to="/" className="nav_link">
                  Home
                </NavLink>
                <NavLink to="/collection" className="nav_link">
                  Collection
                </NavLink>
                <NavLink to="/about" className="nav_link">
                  About
                </NavLink>
                <NavLink to="/contact" className="nav_link">
                  Contact
                </NavLink>
                <NavLink to="#" className="nav_link">
                  Logout
                </NavLink>
              </ul>
            )}
          </div>
          {/**
          <div className="menu_icon navbar-toggle" onClick={toggleOpen}>
          <ion-icon name="menu-outline"></ion-icon>
          {openMenu ? "Close" : "Menu"}
          </div>
          {openMenu && (
            <div className="menu_titles">
            <NavLink to="#" className="nav_link" >
            My Profile
            </NavLink>
            <NavLink to="#" className="nav_link" >
            Orders
            </NavLink>
            <NavLink to="/" className="nav_link" >
            Home
            </NavLink>
            <NavLink
            to="/collection"
            className="nav_link"
           
            >
            Collection
            </NavLink>
            <NavLink to="/about" className="nav_link" >
            About
            </NavLink>
            <NavLink to="/contact" className="nav_link" >
            Contact
            </NavLink>
            <NavLink to="#" className="nav_link">
            Logout
            </NavLink>
            </div>
          )}
          */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
