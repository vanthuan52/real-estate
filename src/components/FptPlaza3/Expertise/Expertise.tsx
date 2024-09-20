"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import HeadingSection from "../HeadingSection/HeadingSection";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./Expertise.module.scss";
import { getImagePublicPath } from "@/utils/getImagePublicPath";
import { PROJECT_SLUG } from "@/utils/constant";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import TextLink from "../TextLink/TextLink";

const Expertise = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className={styles["expertise"]}>
      <div className="container">
        <HeadingSection title="Our Expertise">
          <TextLink href="#">View all blogs</TextLink>
        </HeadingSection>

        <div className={styles["expertise-content"]}>
          <div className={styles["expertise-title"]}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
          </div>

          <div className={styles["slider-control"]}>
            <button
              className={styles["slider-control__button"]}
              onClick={() => swiperRef?.current?.slidePrev()}
            >
              <BsChevronLeft />
            </button>
            <button
              className={styles["slider-control__button"]}
              onClick={() => swiperRef?.current?.slideNext()}
            >
              <BsChevronRight />
            </button>
          </div>
        </div>
        <Swiper
          grabCursor
          modules={[Navigation]}
          slidesPerView={1}
          className={styles["slider"]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide className={styles["slide"]}>
            <div className={styles["slide-image"]}>
              <Image
                src={getImagePublicPath({ dir: PROJECT_SLUG.FPT_PLAZA_3, path: "image-1.jpg" })}
                fill
                alt=""
              />
            </div>
            <div className={styles["slide-content"]}>
              <h4 className={styles["slide-title"]}>Lorem ipsum</h4>
              <p className={styles["slide-subtitle"]}>
                Sed tristique nec orci scelerisque bibendum.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles["slide"]}>
            <div className={styles["slide-image"]}>
              <Image
                src={getImagePublicPath({ dir: PROJECT_SLUG.FPT_PLAZA_3, path: "image-4.jpg" })}
                fill
                alt=""
              />
            </div>
            <div className={styles["slide-content"]}>
              <h4 className={styles["slide-title"]}>Lorem ipsum</h4>
              <p className={styles["slide-subtitle"]}>
                Sed tristique nec orci scelerisque bibendum.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Expertise;
