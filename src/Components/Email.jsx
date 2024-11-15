import React from "react";

const Email = () => {
  return (
    <>
      <div className="email_container">
        <h1 className="email_title">Subscribe now & get 20% off</h1>
        <p className="email_para">
          The latest fashion collections focus on bold colors, sustainable
        </p>
        <form className="email_form">
          <input type="email" placeholder="Enter Your Email" />
          <button type="submit" className="sub_btn">
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
};

export default Email;
