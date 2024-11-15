import Carousel from "better-react-carousel";
import React from "react";
import { assets } from "../assets/assets";

const ImageCarousel = () => {
  return (
    <>
      <div className="image_section">
        <Carousel loop cols={1} rows={1} autoplay={3000}>
          <Carousel.Item>
            <img src={assets.carousel_1} alt="" className="carousel_image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={assets.carousel_2} alt="" className="carousel_image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={assets.carousel_3} alt="" className="carousel_image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={assets.carousel_4} alt="" className="carousel_image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={assets.carousel_5} alt="" className="carousel_image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={assets.carousel_6} alt="" className="carousel_image" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={assets.carousel_7} alt="" className="carousel_image" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default ImageCarousel;
