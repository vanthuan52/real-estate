import React from "react";

import HeadingSection from "../HeadingSection/HeadingSection";

import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <section className={styles["about"]}>
      <div className="container">
        <HeadingSection title="About us" />
        <p className={styles["about-description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum et felis
          vitae elementum. Integer ligula dolor, tincidunt sit amet elementum faucibus, cursus at
          sapien. Sed tristique nec orci scelerisque bibendum.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
