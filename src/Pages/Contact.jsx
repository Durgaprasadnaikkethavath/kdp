import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import Email from "../Components/Email";
import OurPolicy from "../Components/OurPolicy";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <div className="contact_container">
        <div className="contact_title">
          <Title text1={"CONTACT"} text2={"US"} />
        </div>
        <div className="contact_section">
          <div>
            <img src={assets.contact_img} alt="" className="contact_img" />
          </div>
          <div className="contact_details">
            <div>
              <h3 className="our_store">Our Store</h3>
              <p className="store_address">
                SR Nagar, Hyderabad,
                <br /> Telangana -500038
              </p>
              <p className="store_number">Tel: +9347 0547 0593</p>
              <p className="store_email">Email: company@gmail.com</p>
            </div>
            <h1 className="contact_company_heading">Careers at Our Company</h1>
            <p className="contact_job">
              Learn more about our teams and job openings.
            </p>
            <button className="explore_btn">Explore Jobs</button>
          </div>
        </div>
      </div>
      <Email />
      <OurPolicy />
      <Footer />
    </>
  );
};

export default Contact;
