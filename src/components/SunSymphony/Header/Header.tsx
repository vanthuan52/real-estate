"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiList, FiX } from "react-icons/fi";
import Image from "next/image";
import * as motion from "framer-motion/client";

import { AnimatePresence } from "framer-motion";
import { getImagePublicPath } from "@/utils/getImagePublicPath";
import { PROJECT_SLUG } from "@/utils/constant";

import styles from "./Header.module.scss";
import variables from "@/styles/_variables.sun_symphony.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
  }, [isOpen]);

  const toggleMenuMobile = () => {
    setIsOpen(!isOpen);
  };

  const menuMobileVariants = {
    hidden: { x: "-100%" }, // Bắt đầu từ ngoài màn hình bên trái
    visible: { x: 0, transition: { duration: 0.3 } }, // Trượt vào với thời gian 0.5s
    exit: { x: "-100%", transition: { duration: 0.3 } }, // Trượt ra khi đóng
  };

  const scrollToSection = (e: any, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    console.log(variables);
    const yOffset = parseInt(variables.headerHeight); // Điều chỉnh giá trị này theo chiều cao của header
    const y = element!.getBoundingClientRect().top + window.scrollY - yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      <div className={styles.header}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <Image
                src={getImagePublicPath({ dir: PROJECT_SLUG.SUN_SYMPHONY, path: "logo.png" })}
                fill
                alt="logo"
              />
            </div>

            <div className={styles.menu}>
              <div className={styles["menu-item"]}>
                <Link
                  href={{}}
                  onClick={(e) => scrollToSection(e, "introduction")}
                  className={styles["menu-item__link"]}
                >
                  Giới thiệu
                </Link>
              </div>
              <div className={styles["menu-item"]}>
                <Link
                  href={{}}
                  onClick={(e) => scrollToSection(e, "location")}
                  className={styles["menu-item__link"]}
                >
                  Vị trí
                </Link>
              </div>
              <div className={styles["menu-item"]}>
                <Link
                  href={{}}
                  onClick={(e) => scrollToSection(e, "amentity")}
                  className={styles["menu-item__link"]}
                >
                  Tiện ích
                </Link>
              </div>
              <div className={styles["menu-item"]}>
                <Link
                  href={{}}
                  onClick={(e) => scrollToSection(e, "infrastructure")}
                  className={styles["menu-item__link"]}
                >
                  Mặt bằng
                </Link>
              </div>
              <div className={styles["menu-item"]}>
                <Link
                  href={{}}
                  onClick={(e) => scrollToSection(e, "feature")}
                  className={styles["menu-item__link"]}
                >
                  Loại hình
                </Link>
              </div>
              <div className={styles["menu-item"]}>
                <Link
                  href={{}}
                  onClick={(e) => scrollToSection(e, "layout")}
                  className={styles["menu-item__link"]}
                >
                  Layout
                </Link>
              </div>
              <div className={styles["menu-item"]}>
                <Link
                  href={{}}
                  onClick={(e) => scrollToSection(e, "policy")}
                  className={styles["menu-item__link"]}
                >
                  Chính sách
                </Link>
              </div>
            </div>

            <button className={styles["menu-mobile__trigger"]} onClick={toggleMenuMobile}>
              <FiList />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuMobileVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={styles["menu-mobile"]}
          >
            <div className={styles["menu-mobile__heading"]}>
              <Link href={"#"} className={styles["menu-mobile__logo"]}>
                <Image
                  src={getImagePublicPath({ dir: PROJECT_SLUG.SUN_SYMPHONY, path: "logo.png" })}
                  fill
                  alt="logo"
                />
              </Link>

              <button className={styles["menu-mobile__close"]} onClick={toggleMenuMobile}>
                <FiX size={32} />
              </button>
            </div>

            <div className={styles["menu-mobile__list"]}>
              <div className={styles["menu-mobile-item"]}>
                <Link href={"#"} className={styles["menu-mobile-item__link"]}>
                  Giới thiệu
                </Link>
              </div>
              <div className={styles["menu-mobile-item"]}>
                <Link href={"#"} className={styles["menu-mobile-item__link"]}>
                  Vị trí
                </Link>
              </div>
              <div className={styles["menu-mobile-item"]}>
                <Link href={"#"} className={styles["menu-mobile-item__link"]}>
                  Mặt bằng
                </Link>
              </div>
              <div className={styles["menu-mobile-item"]}>
                <Link href={"#"} className={styles["menu-mobile-item__link"]}>
                  Loại hình
                </Link>
              </div>
              <div className={styles["menu-mobile-item"]}>
                <Link href={"#"} className={styles["menu-mobile-item__link"]}>
                  Layout
                </Link>
              </div>
              <div className={styles["menu-mobile-item"]}>
                <Link href={"#"} className={styles["menu-mobile-item__link"]}>
                  Tiện ích
                </Link>
              </div>
              <div className={styles["menu-mobile-item"]}>
                <Link href={"#"} className={styles["menu-mobile-item__link"]}>
                  Chính sách
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default Header;
