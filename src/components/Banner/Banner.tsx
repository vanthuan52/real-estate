"use client";

import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.scss";
import Slider from "../Slider/Slider";

const images = [
  {
    src: "/images/banner-4.jpg",
    alt: "",
  },
  {
    src: "/images/banner-1.jpg",
    alt: "",
  },
  {
    src: "/images/banner-2.jpg",
    alt: "",
  },
  {
    src: "/images/banner-3.jpg",
    alt: "",
  },
  {
    src: "/images/banner-5.jpg",
    alt: "",
  },
  {
    src: "/images/banner-6.jpg",
    alt: "",
  },
  {
    src: "/images/banner-7.jpg",
    alt: "",
  },
  {
    src: "/images/banner-8.jpg",
    alt: "",
  },
  {
    src: "/images/banner-9.jpg",
    alt: "",
  },
];

const Banner = () => {
  return (
    <section>
      <div className="container">
        <div className="banner-slider">
          <Slider data={images} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
