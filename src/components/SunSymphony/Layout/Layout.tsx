import React from "react";
import Image from "next/image";

import { getImagePublicPath } from "@/utils/getImagePublicPath";
import { PROJECT_SLUG } from "@/utils/constant";

import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <section className={styles["layout"]} id="layout">
      <div className="container">
        <h3 className={styles["heading"]}>LAYOUT BÓC MÁI CĂN HỘ SUN SYMPHONY ĐÀ NẴNG</h3>
        <div className={styles["layout-list"]}>
          <div className={styles["layout-item"]}>
            <Image
              src={getImagePublicPath({ dir: PROJECT_SLUG.SUN_SYMPHONY, path: "layout-1.jpg" })}
              fill
              alt=""
            />
          </div>
          <div className={styles["layout-item"]}>
            <Image
              src={getImagePublicPath({ dir: PROJECT_SLUG.SUN_SYMPHONY, path: "layout-2.jpg" })}
              fill
              alt=""
            />
          </div>
          <div className={styles["layout-item"]}>
            <Image
              src={getImagePublicPath({ dir: PROJECT_SLUG.SUN_SYMPHONY, path: "layout-3.jpg" })}
              fill
              alt=""
            />
          </div>
          <div className={styles["layout-item"]}>
            <Image
              src={getImagePublicPath({ dir: PROJECT_SLUG.SUN_SYMPHONY, path: "layout-4.jpg" })}
              fill
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
