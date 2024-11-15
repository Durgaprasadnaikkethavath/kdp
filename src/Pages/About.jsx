import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import Email from "../Components/Email";
import Footer from "../Components/Footer";
import OurPolicy from "../Components/OurPolicy";

const About = () => {
  return (
    <>
      <div className="about_container">
        <div className="about_title">
          <Title text1={"ABOUT"} text2={"US"} />
        </div>
        <div className="about_details">
          <div className="about_img">
            <img src={assets.about_img} alt="" />
          </div>
          <div>
            <p className="about_para">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p className="about_para">
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <h3 className="about_mission">Our Mission</h3>
            <p className="about_para">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
        <div>
          <div className="about_choose">
            <Title text1={"WHY"} text2={"CHOOSE US"} />
          </div>
          <div className="choose">
            <div className="choose_part">
              <h3 className="choose_heading">Quality Assurance:</h3>
              <p className="choose_para">
                We meticulously select and vet each product to ensure it meets
                our stringent quality standards.
              </p>
            </div>
            <div className="choose_part">
              <h3 className="choose_heading">Convenience:</h3>
              <p className="choose_para">
                With our user-friendly interface and hassle-free ordering
                process, shopping has never been easier.
              </p>
            </div>
            <div className="choose_part">
              <h3 className="choose_heading">Exceptional Customer Service:</h3>
              <p className="choose_para">
                Our team of dedicated professionals is here to assist you the
                way, ensuring your satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Email />

      <OurPolicy />
      <Footer />
    </>
  );
};

export default About;
