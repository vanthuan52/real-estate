import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { FiList } from "react-icons/fi";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <img src="/images/logo.png" />
          </div>

          <div className={styles.menu}>
            <div className={styles["menu-item"]}>
              <Link href={"#"} className={styles["menu-item__link"]}>
                Giới thiệu
              </Link>
            </div>
            <div className={styles["menu-item"]}>
              <Link href={"#"} className={styles["menu-item__link"]}>
                Vị trí
              </Link>
            </div>
            <div className={styles["menu-item"]}>
              <Link href={"#"} className={styles["menu-item__link"]}>
                Mặt bằng
              </Link>
            </div>
            <div className={styles["menu-item"]}>
              <Link href={"#"} className={styles["menu-item__link"]}>
                Loại hình
              </Link>
            </div>
            <div className={styles["menu-item"]}>
              <Link href={"#"} className={styles["menu-item__link"]}>
                Layout
              </Link>
            </div>
            <div className={styles["menu-item"]}>
              <Link href={"#"} className={styles["menu-item__link"]}>
                Tiện ích
              </Link>
            </div>
            <div className={styles["menu-item"]}>
              <Link href={"#"} className={styles["menu-item__link"]}>
                Chính sách
              </Link>
            </div>
          </div>

          <button className={styles["menu-mobile__trigger"]}>
            <FiList />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
