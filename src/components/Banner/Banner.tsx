"use client";

import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.scss";
import Slider from "../Slider/Slider";

const images = [
  {
    src: "https://www.youtube.com/embed/Qg2IStn5QLI",
    type: "video",
    thumbnail: "/images/video-thumb.jpg",
  },
  {
    src: "/images/banner-4.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "/images/banner-1.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "/images/banner-2.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "/images/banner-3.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "/images/banner-5.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "/images/banner-6.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "/images/banner-7.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "/images/banner-8.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "/images/banner-9.jpg",
    alt: "",
    type: "image",
  },
];

const Banner = () => {
  return (
    <section>
      <div className="container">
        <div className="banner-slider">
          <Slider data={images as any} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
{
  /* <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/Qg2IStn5QLI?si=fVservb_ElrjgO8E"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
></iframe>; */
}
