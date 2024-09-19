import React from "react";

import style from "./MainNewsletter.module.scss";
import MainButton from "../MainButton/MainButton";

const MainNewsletter = () => {
  return (
    <section className={style["newsletter"]}>
      <div className="container">
        <div className={style["newsletter-wrapper"]}>
          <div className={style["newsletter-content"]}>
            <div style={{ fontSize: "5.5rem" }}>📨</div>
            <h1 className={style["newsletter-title"]}>Lorem ipsum dolor sit amet</h1>
            <p className={style["newsletter-description"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae ipsum interdum,
              imperdiet ipsum id, sodales quam. Nullam finibus felis vulputate, sodales ante vitae,
              sollicitudin lorem.
            </p>
            <div>
              <MainButton>Lorem ipsum dolor sit</MainButton>
            </div>
          </div>
          <div className={style["newsletter-form__wrapper"]}>
            <form className={style["newsletter-form"]}>
              <div className={style["newsletter-form__title"]}>Lorem ipsum dolor sit</div>
              <input type="text" className={style["form-input"]} placeholder="Lorem ipsum"></input>
              <input type="email" className={style["form-input"]} placeholder="Lorem ipsum"></input>
              <MainButton size="lg">Lorem ipsum</MainButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainNewsletter;
