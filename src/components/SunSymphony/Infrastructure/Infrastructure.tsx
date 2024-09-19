"use client";

import React from "react";
import Image from "next/image";

import { getImagePublicPath } from "@/utils/getImagePublicPath";
import { PROJECT_SLUG } from "@/utils/constant";

import styles from "./Infrastructure.module.scss";

const Infrastructure = () => {
  const handleClick = () => {};

  return (
    <section className={styles["infrastructure"]} id="infrastructure">
      <div className="container-fluid">
        <h2 className={styles["heading"]}>MẶT BẰNG CĂN HỘ SUN SYMPHONY</h2>
        <div className={styles["infrastructure-content"]}>
          <div className={styles["infrastructure-assets"]}>
            <div className={styles["assets-file"]}>
              <Image
                src={getImagePublicPath({
                  dir: PROJECT_SLUG.SUN_SYMPHONY,
                  path: "infrastructure.png",
                })}
                fill
                alt=""
              />
            </div>
            <div className={styles["assets-image"]}>
              <Image
                src={getImagePublicPath({
                  dir: PROJECT_SLUG.SUN_SYMPHONY,
                  path: "infrastructure-2.jpg",
                })}
                fill
                alt=""
              />
            </div>
            <div className={styles["assets-image"]}>
              <Image
                src={getImagePublicPath({
                  dir: PROJECT_SLUG.SUN_SYMPHONY,
                  path: "infrastructure-3.jpg",
                })}
                fill
                alt=""
              />
            </div>
            <div className={styles["assets-image"]}>
              <Image
                src={getImagePublicPath({
                  dir: PROJECT_SLUG.SUN_SYMPHONY,
                  path: "infrastructure-4.jpg",
                })}
                fill
                alt=""
              />
            </div>
          </div>

          <div className={styles["infrastructure-form"]}>
            <h3>NHẬN BÁO GIÁ QUỸ CĂN ĐẸP NHẤT GỬI THÔNG TIN MẶT BẰNG, LAYOUT, CHÍNH SÁCH</h3>
            <p>
              HOTLINE hỗ trợ nhanh chóng: <br /> 0866.444.072
            </p>
            <form>
              <input type="text" placeholder="Số điện thoại" className={styles["form-control"]} />
              <select className={styles["form-control"]}>
                <option value="">*Chọn loại hình sản phẩm</option>
                <option value="SHOPHOUSE">SHOPHOUSE</option>
                <option value="TOWNHOUSE 3 TẦNG">TOWNHOUSE 3 TẦNG</option>
                <option value="TOWNHOUSE 5 TẦNG">TOWNHOUSE 5 TẦNG</option>
                <option value="VILLA MẶT SÔNG">VILLA MẶT SÔNG</option>
                <option value="CĂN HỘ STUDIO">CĂN HỘ STUDIO</option>
                <option value="CĂN HỘ 1 PN">CĂN HỘ 1 PN</option>
                <option value="CĂN HỘ 2 PN">CĂN HỘ 2 PN</option>
                <option value="CĂN HỘ 3 PN">CĂN HỘ 3 PN</option>
              </select>
              <button type="button" onClick={handleClick}>
                Nhận báo giá
              </button>
            </form>
            <div className={styles["infrastructure-notice"]}>
              <span>* Thông tin đầy đủ trực tiếp từ trưởng phòng kinh doanh SUN GROUP.</span>
              <span>* Phân tích dự án chuyên sâu, khách quan.</span>
              <span> Bảo mật tuyệt đối thông tin cá nhân khách hàng.</span>
              <span>* Chính sách chiết khấu, ưu đãi khách hàng tốt nhất thị trường!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
