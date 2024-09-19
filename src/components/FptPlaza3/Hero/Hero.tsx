import React from "react";

import Image from "next/image";
import { getImagePublicPath } from "@/utils/getImagePublicPath";
import { PROJECT_SLUG } from "@/utils/constant";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles["hero"]}>
      <div className="container">
        <div className={styles["hero-content"]}>
          <h1 className={styles["hero-title"]}>
            Lorem ipsum, <br /> dolor sit
          </h1>
          <div className={styles["hero-subcontent"]}>
            <p>Lorem ipsum dolor sit amet</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum et
              felis vitae elementum. Integer ligula dolor, tincidunt sit amet elementum faucibus,
              cursus at sapien.
            </p>
          </div>
        </div>
        <div className={styles["hero-images"]}>
          <div className={styles["hero-image"]}>
            <Image
              src={getImagePublicPath({ dir: PROJECT_SLUG.FPT_PLAZA_3, path: "image-5.jpg" })}
              alt=""
              fill
            />
          </div>
          <div className={styles["hero-image"]}>
            <Image
              src={getImagePublicPath({ dir: PROJECT_SLUG.FPT_PLAZA_3, path: "image-7.jpg" })}
              alt=""
              fill
            />
          </div>
          <div className={styles["hero-image"]}>
            <Image
              src={getImagePublicPath({ dir: PROJECT_SLUG.FPT_PLAZA_3, path: "image-6.jpg" })}
              alt=""
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
