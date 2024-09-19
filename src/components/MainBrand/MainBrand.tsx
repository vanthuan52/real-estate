import React from "react";

import styles from "./MainBrand.module.scss";
import Image from "next/image";

const MainBrand = () => {
  return (
    <section className={styles["brand"]}>
      <div className="container">
        <div className={styles["brand-wrapper"]}>
          <h1 className={styles["brand-title"]}>Lorem ipsum dolor sit amet</h1>
          <p className={styles["brand-description"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <div className={styles["brand-list"]}>
            <div className={styles["brand-item"]}>
              <Image src={"/images/main/brand-1.webp"} fill alt="" />
            </div>
            <div className={styles["brand-item"]}>
              <Image src={"/images/main/brand-2.webp"} fill alt="" />
            </div>
            <div className={styles["brand-item"]}>
              <Image src={"/images/main/brand-3.webp"} fill alt="" />
            </div>
            <div className={styles["brand-item"]}>
              <Image src={"/images/main/brand-4.webp"} fill alt="" />
            </div>
            <div className={styles["brand-item"]}>
              <Image src={"/images/main/brand-5.webp"} fill alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBrand;
