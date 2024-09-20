import React from "react";
import Image from "next/image";
import HeadingSection from "../HeadingSection/HeadingSection";

import styles from "./Projects.module.scss";
import { getImagePublicPath } from "@/utils/getImagePublicPath";
import { PROJECT_SLUG } from "@/utils/constant";
import TextLink from "../TextLink/TextLink";

const Projects = () => {
  return (
    <section className={styles["project"]}>
      <div className="container">
        <HeadingSection title="Latest Projects">
          <TextLink href="#">View all projects</TextLink>
        </HeadingSection>
        <div className={styles["project-list"]}>
          <div className={styles["column-one"]}>
            <div className={styles["project-item"]}>
              <div className={styles["project-image"]}>
                <Image
                  src={getImagePublicPath({ dir: PROJECT_SLUG.FPT_PLAZA_3, path: "image-1.jpg" })}
                  fill
                  alt=""
                />
              </div>
              <div className={styles["project-info"]}>
                <h3 className={styles["project-title"]}>Lorem ipsum dolor sit amet</h3>
                <p className={styles["project-subtitle"]}>Bill Gate</p>
              </div>
              <div className={styles["project-year"]}>2024</div>
            </div>
            <div className={styles["project-item"]}>
              <div className={styles["project-image"]}>
                <Image
                  src={getImagePublicPath({ dir: PROJECT_SLUG.FPT_PLAZA_3, path: "image-2.jpg" })}
                  fill
                  alt=""
                />
              </div>
              <div className={styles["project-info"]}>
                <h3 className={styles["project-title"]}>Lorem ipsum dolor sit amet</h3>
                <p className={styles["project-subtitle"]}>Bill Gate</p>
              </div>
              <div className={styles["project-year"]}>2024</div>
            </div>
          </div>

          <div className={styles["column-two"]}>
            <div className={styles["project-item"]}>
              <div className={styles["project-image"]}>
                <Image
                  src={getImagePublicPath({ dir: PROJECT_SLUG.FPT_PLAZA_3, path: "image-3.jpg" })}
                  fill
                  alt=""
                />
              </div>
              <div className={styles["project-info"]}>
                <h3 className={styles["project-title"]}>Lorem ipsum</h3>
                <p className={styles["project-subtitle"]}>Elon Musk</p>
              </div>
              <div className={styles["project-year"]}>2024</div>
            </div>
            <div className={styles["project-item"]}>
              <div className={styles["project-image"]}>
                <Image
                  src={getImagePublicPath({ dir: PROJECT_SLUG.FPT_PLAZA_3, path: "image-5.jpg" })}
                  fill
                  alt=""
                />
              </div>
              <div className={styles["project-info"]}>
                <h3 className={styles["project-title"]}>Lorem ipsum</h3>
                <p className={styles["project-subtitle"]}>Elon Musk</p>
              </div>
              <div className={styles["project-year"]}>2024</div>
            </div>
          </div>

          <div className={styles["column-three"]}>
            <div className={styles["project-item"]}>
              <div className={styles["project-image"]}>
                <Image
                  src={getImagePublicPath({ dir: PROJECT_SLUG.FPT_PLAZA_3, path: "image-4.jpg" })}
                  fill
                  alt=""
                />
              </div>
              <div className={styles["project-info"]}>
                <h3 className={styles["project-title"]}>Lorem ipsum</h3>
                <p className={styles["project-subtitle"]}>Mark Zuckerberg</p>
              </div>
              <div className={styles["project-year"]}>2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
