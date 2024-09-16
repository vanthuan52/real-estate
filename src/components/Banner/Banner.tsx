"use client";

import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";

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
        <Slider data={images} />
      </div>
    </section>
  );
};

export default Banner;
