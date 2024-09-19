import React from "react";

import style from "./MainLatest.module.scss";
import MainButton from "../MainButton/MainButton";

const MainLatest = () => {
  return (
    <section className={style["latest"]}>
      <h1 className={style["latest-title"]}>Lorem ipsum dolor sit</h1>
      <div className={style["latest-video"]}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/KTGCEcT8x1k?si=lwPAw4EUFZRQrlte"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <MainButton>Xem thêm</MainButton>
    </section>
  );
};

export default MainLatest;
