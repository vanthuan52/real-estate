import React, { useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Collection.scss";
import Slider from "../Slider/Slider";

const images = [
  {
    src: "/images/collection-4.jpg",
    alt: "",
  },
  {
    src: "/images/collection-1.jpg",
    alt: "",
  },
  {
    src: "/images/collection-2.jpg",
    alt: "",
  },
  {
    src: "/images/collection-3.jpg",
    alt: "",
  },
];

const Collection = () => {
  return (
    <section className="collection">
      <div className="slider-wrapper">
        <h3 className="title">CĂN HỘ, TOWHOUSE, BIỆT THỰ SUN SYMPHONY </h3>
        <Slider data={images} />
      </div>
    </section>
  );
};

export default Collection;
