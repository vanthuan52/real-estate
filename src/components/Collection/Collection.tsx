import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Collection.scss";
import Slider from "../Slider/Slider";

const images = [
  {
    src: "/images/collection-4.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "/images/collection-1.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "/images/collection-2.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "/images/collection-3.jpg",
    alt: "",
    type: "image",
  },
];

const Collection = () => {
  return (
    <section className="collection">
      <div className="container-fluid">
        <div className="collection-content">
          <h2 className="title">CĂN HỘ, TOWHOUSE, BIỆT THỰ SUN SYMPHONY </h2>
          <div className="collection-slider">
            <Slider data={images as any} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
