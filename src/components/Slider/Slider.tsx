"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.scss";

type SliderProps = {
  data: { src: string; alt?: string }[];
};

const Slider = ({ data }: SliderProps) => {
  return (
    <Swiper
      grabCursor
      modules={[Navigation]}
      slidesPerView={1}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
        disabledClass: "swiper-button-disabled",
      }}
      className="slider"
    >
      <button
        role="button"
        id="previous-banner"
        arial-label="Previous banner"
        className="swiper-button-prev"
      >
        <BsChevronLeft aria-label="Chevron Left" />
      </button>
      <button
        role="button"
        id="next-banner"
        aria-label="Next banner"
        className="swiper-button-next"
      >
        <BsChevronRight aria-label="Chevron Right" />
      </button>
      {data.map((item, index) => (
        <SwiperSlide className="slide" key={index}>
          <Image src={item.src} fill alt={item.alt || ""} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
