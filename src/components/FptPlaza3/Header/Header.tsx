"use client";

import React, { useEffect, useState } from "react";

import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { getImagePublicPath } from "@/utils/getImagePublicPath";
import { PROJECT_SLUG } from "@/utils/constant";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={styles["header"]}>
      <div className="container">
        <div className={styles["header-wrapper"]}>
          <div className={`${styles["menu"]} ${styles["menu-left"]}`}>
            <Link href="#">
              <div className={styles["menu-item"]}>Home</div>
            </Link>
            <Link href="#">
              <div className={styles["menu-item"]}>About</div>
            </Link>
            <Link href="#">
              <div className={styles["menu-item"]}>Projects</div>
            </Link>
            <Link href="#">
              <div className={styles["menu-item"]}>Services</div>
            </Link>
          </div>

          <div className={styles["header-logo"]}>
            <Image
              src={getImagePublicPath({ dir: PROJECT_SLUG.FPT_PLAZA_3, path: "logo.png" })}
              fill
              alt=""
            />
          </div>

          <div className={`${styles["menu"]} ${styles["menu-right"]}`}>
            <Link href="#">
              <div className={styles["menu-item"]}>Contact us</div>
            </Link>
            <Link href="#">
              <div className={styles["menu-item"]}>Book a call</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
// <div
//   className={`${style["hamburger"]} ${showMenu && style["hamburger--active"]}`}
//   onClick={toggleMenu}
// >
//   <div className={style["hamburger-slices"]}>
//     <div className={style["hamburger-slice"]}></div>
//     <div className={style["hamburger-slice"]}></div>
//     <div className={style["hamburger-slice"]}></div>
//   </div>
// </div>;
