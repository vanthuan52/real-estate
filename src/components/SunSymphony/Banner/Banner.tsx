import React from "react";
import Slider from "@/components/SunSymphony/Slider/Slider";

import { getImagePublicPath } from "@/utils/getImagePublicPath";
import { PROJECT_SLUG } from "@/utils/constant";

import styles from "./Banner.module.scss";

const images = [
  {
    src: "https://www.youtube.com/embed/Qg2IStn5QLI",
    type: "video",
    thumbnail: "video-thumb.jpg",
  },
  {
    src: "banner-4.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "banner-1.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "banner-2.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "banner-3.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "banner-5.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "banner-6.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "banner-7.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "banner-8.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "banner-9.jpg",
    alt: "",
    type: "image",
  },
];

const Banner = () => {
  return (
    <section>
      <div className="container">
        <div className={styles["banner-slider"]}>
          <Slider
            data={
              images.map((item) => ({
                ...item,
                src: item.src
                  ? getImagePublicPath({ dir: PROJECT_SLUG.SUN_SYMPHONY, path: item.src })
                  : undefined,
                thumbnail: item.thumbnail
                  ? getImagePublicPath({ dir: PROJECT_SLUG.SUN_SYMPHONY, path: item.thumbnail })
                  : undefined,
              })) as any
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
