import React from "react";

import style from "./MainFeature.module.scss";
import Image from "next/image";

const MainFeature = () => {
  return (
    <section className={style["feature"]}>
      <div className="container">
        <div className={style["feature-wrapper"]}>
          <div className={style["feature-content"]}>
            <h1 className={style["feature-title"]}>Lorem ipsum dolor sit amet</h1>
            <p className={style["feature-description"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae ipsum interdum,
              imperdiet ipsum id, sodales quam. Nullam finibus felis vulputate, sodales ante vitae,
              sollicitudin lorem.
            </p>
            <p className={style["feature-description"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta odio et placerat
              fermentum.
            </p>
          </div>
          <div className={style["feature-image"]}>
            <Image src={"/images/main/main-feature.png"} fill alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFeature;
