import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="total_container">
        <div className="footer_container">
          <div className="footer_section">
            <Link to="/" className="footer_heading">
              <h1 className="tinos-regular tinos-bold tinos-regular-italic tinos-bold-italic">
                kdpn mart
              </h1>
            </Link>
            <p className="small_footer">
              -The best shopping experience for users across the globe.
            </p>
            <p className="footer_para">
              These companies rely on technology to streamline logistics,
              customer support, and inventory management.
            </p>
            <div className="footer_call">
              <ion-icon name="call-outline"></ion-icon>
              <p className="footer_call_number">+9347 0547 0593</p>
            </div>
            <div className="footer_email">
              <ion-icon name="mail-outline"></ion-icon>
              <p className="footer_call_number">company@gmail.com</p>
            </div>
            <div className="whatsapp">
              <ion-icon name="logo-whatsapp"></ion-icon>
              <div>
                <p className="whatsapp_name">Whatsapp</p>
                <p className="whatsapp_number">+9347 0547 0593</p>
              </div>
            </div>
            <div className="company_address_1">
              <ion-icon name="home-outline"></ion-icon>
              <p className="company_address_name">
                SR Nagar, Hyderabad, Telangana -500038
              </p>
            </div>
            <div className="social_icons">
              <Link to="#" className="social_type_of_icon">
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
              <Link to="#" className="social_type_of_icon">
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
              <Link to="#" className="social_type_of_icon">
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
              <Link to="#" className="social_type_of_icon">
                <ion-icon name="logo-google"></ion-icon>
              </Link>
              <Link to="#" className="social_type_of_icon">
                <ion-icon name="logo-youtube"></ion-icon>
              </Link>
            </div>
          </div>
          <div className="all_company_ours">
            <div className="footer_details">
              <h1>Company</h1>
              <div className="company_types">
                <Link to="/" className="footer_link">
                  Home
                </Link>
                <Link to="/about" className="footer_link">
                  About
                </Link>
                <Link to="#" className="footer_link">
                  Blog
                </Link>
                <Link to="/contact" className="footer_link">
                  Contact
                </Link>
                <Link to="/collection" className="footer_link">
                  Collection
                </Link>
              </div>
            </div>
            <div className="footer_details">
              <h1>Customer Services</h1>
              <div className="company_types">
                <Link to="#" className="footer_link">
                  My Account
                </Link>
                <Link to="#" className="footer_link">
                  Track Your Order
                </Link>
                <Link to="#" className="footer_link">
                  Return
                </Link>
                <p className="footer_link">FAQ</p>
              </div>
            </div>
            <div className="footer_details_1">
              <h1>Our Information</h1>
              <div className="company_address">
                <p>Privacy policy</p>
                <p>User Terms and Condition</p>
                <p>Payment Methods</p>
                <p>Gift Cards</p>
              </div>
            </div>
          </div>
        </div>
        <hr style={{ marginTop: "40px" }} />
        <footer>
          <p className="copyright">
            Copyright 2024 E-commerce website -All Right Reserved.
          </p>
          <p className="username">- Kethavath Durga Prasad Naik</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
