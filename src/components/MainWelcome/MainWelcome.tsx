import React from "react";

import style from "./MainWelcome.module.scss";

const MainWelcome = () => {
  return (
    <section className={style["welcome"]}>
      <h1 className={style["welcome-title"]}>Lorem ipsum dolor sit amet</h1>
      <p className={style["welcome-description"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta odio et placerat
        fermentum. Aenean efficitur orci ultricies pellentesque luctus.
      </p>
      <div className={style["line"]}></div>
    </section>
  );
};

export default MainWelcome;
