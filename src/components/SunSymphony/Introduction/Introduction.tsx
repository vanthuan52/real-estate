import React from "react";

import Image from "next/image";
import { getImagePublicPath } from "@/utils/getImagePublicPath";
import { PROJECT_SLUG } from "@/utils/constant";

import styles from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <section className={styles["introduction"]} id="introduction">
      <div className="container">
        <h1 className={styles["introduction-title"]}>
          SUN SYMPHONY RESIDENCE – ĐẲNG CẤP TINH HOA MẶT SÔNG HÀN
        </h1>
        <h2 className={styles["introduction-subtitle"]}>
          DỰ ÁN 15 NĂM ẤP Ủ & 04 NĂM THIẾT KẾ CỦA SUN GROUP
        </h2>
        <div className={styles["introduction-description"]}>
          <p>
            Nằm tại vị trí đắc địa bên dòng sông Hàn thơ mộng và hòa mình vào sự nhộn nhịp của đại
            lộ Trần Hưng Đạo, Sun Symphony Residences tỏa sáng như một biểu tượng của sự sang trọng
            và tinh tế ngay giữa lòng thành phố Đà Nẵng sôi động.
          </p>
          <p>
            Sun Property kiến tạo một Tổ hợp Bất động sản Semi-Compound cao cấp, lần đầu ra mắt thị
            trường. Một điểm đến năng động mới của Đà Nẵng. 03 tòa tháp cao tầng với tầm view 3
            trong 1: view sông Hàn, view biển, view thành phố. ( đặc biệt trực diện pháo hoa chỉ
            chưa tới 500m
          </p>
        </div>
      </div>
      <div className={styles["decor"]}>
        <Image
          src={getImagePublicPath({ dir: PROJECT_SLUG.SUN_SYMPHONY, path: "background.png" })}
          fill
          alt=""
        />
      </div>
    </section>
  );
};

export default Introduction;
