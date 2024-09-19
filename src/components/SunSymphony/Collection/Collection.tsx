import React from "react";
import Slider from "@/components/SunSymphony/Slider/Slider";

import { getImagePublicPath } from "@/utils/getImagePublicPath";
import { PROJECT_SLUG } from "@/utils/constant";

import styles from "./Collection.module.scss";

const images = [
  {
    src: "collection-4.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "collection-1.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "collection-2.jpg",
    alt: "",
    type: "image",
  },
  {
    src: "collection-3.jpg",
    alt: "",
    type: "image",
  },
];

const Collection = () => {
  return (
    <section className={styles["collection"]}>
      <div className="container-fluid">
        <div className={styles["collection-content"]}>
          <h2 className={styles["title"]}>CĂN HỘ, TOWHOUSE, BIỆT THỰ SUN SYMPHONY </h2>
          <div className={styles["collection-slider"]}>
            <Slider
              data={
                images.map((item) => ({
                  ...item,
                  src: item.src
                    ? getImagePublicPath({ dir: PROJECT_SLUG.SUN_SYMPHONY, path: item.src })
                    : undefined,
                })) as any
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
