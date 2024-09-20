import React from "react";

import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import MainButton from "@/components/MainButton/MainButton";
import { PROJECT_SLUG } from "@/utils/constant";

const Projects = () => {
  return (
    <>
      <div className={styles["heading"]}>
        <h1>Dự án</h1>
      </div>

      <div className="container">
        <div className={styles["project-list"]}>
          <div className={styles["project-item"]}>
            <div className={styles["project-image"]}>
              <Image src={"/images/main/fpt-plaza-3.png"} alt="" fill />
            </div>
            <div className={styles["project-content"]}>
              <h2 className={styles["project-title"]}>FPT Plaza 3</h2>
              <p className={styles["project-description"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum et
                felis vitae elementum.
              </p>
              <Link
                href={`projects/${PROJECT_SLUG.FPT_PLAZA_3}`}
                className={styles["project-action"]}
              >
                <MainButton size="sm">Xem thêm</MainButton>
              </Link>
            </div>
          </div>

          <div className={styles["project-item"]}>
            <div className={styles["project-image"]}>
              <Image src={"/images/main/sun-symphony-residence.png"} alt="" fill />
            </div>
            <div className={styles["project-content"]}>
              <h2 className={styles["project-title"]}>Sun Symphony Residence</h2>
              <p className={styles["project-description"]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum et
                felis vitae elementum.
              </p>
              <Link
                href={`projects/${PROJECT_SLUG.SUN_SYMPHONY}`}
                className={styles["project-action"]}
              >
                <MainButton size="sm">Xem thêm</MainButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
