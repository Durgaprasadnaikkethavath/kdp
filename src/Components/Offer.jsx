import React from "react";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <>
      <section className="main_container">
        <div className="offer_container">
          <p>Call Us : +123-547-593</p>
        </div>
        <div className="offer_container">
          <p>Sign up and GET 25% OFF for your first order.</p>
          <Link to="/login" className="offer_code">
            <p>Sign Up</p>
          </Link>
        </div>
        <div className="offer_icon_container">
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-google"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-youtube"></ion-icon>
        </div>
      </section>
    </>
  );
};

export default Offer;
