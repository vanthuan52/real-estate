import React from "react";
import HeadingSection from "../HeadingSection/HeadingSection";

import styles from "./Stories.module.scss";
import Image from "next/image";
import { getImagePublicPath } from "@/utils/getImagePublicPath";
import { PROJECT_SLUG } from "@/utils/constant";

const Stories = () => {
  return (
    <section className={styles["story"]}>
      <div className="container">
        <HeadingSection title="Insight & Stories" />
        <div className={styles["story-title"]}>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </div>
        <div className={styles["story-description"]}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum et felis
            vitae elementum.
          </p>
        </div>
        <div className={styles["story-list"]}>
          <div className={styles["story-item"]}>
            <div className={styles["story-item__image"]}>
              <Image
                src={getImagePublicPath({ dir: PROJECT_SLUG.FPT_PLAZA_3, path: "image-6.jpg" })}
                fill
                alt=""
              />
            </div>
          </div>
          <div className={`${styles["story-item"]} ${styles["story-item--has-content"]}`}>
            <div className={styles["story-item__image"]}>
              <Image
                src={getImagePublicPath({ dir: PROJECT_SLUG.FPT_PLAZA_3, path: "image-5.jpg" })}
                fill
                alt=""
              />
            </div>
            <h4 className={styles["story-item__title"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h4>
            <p className={styles["story-item__subtitle"]}>Lorem ipsum</p>
            <div className={styles["story-item__time"]}>5 years ago</div>
          </div>
          <div className={styles["story-item"]}>
            <div className={styles["story-item__image"]}>
              <Image
                src={getImagePublicPath({ dir: PROJECT_SLUG.FPT_PLAZA_3, path: "image-7.jpg" })}
                fill
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
