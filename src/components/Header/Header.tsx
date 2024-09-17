"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiList, FiX } from "react-icons/fi";
import Image from "next/image";
import * as motion from "framer-motion/client";

import styles from "./Header.module.scss";
import { AnimatePresence } from "framer-motion";

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

  return (
    <React.Fragment>
      <div className={styles.header}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.logo}>
              <Image src="/images/logo.png" fill alt="logo" />
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
                <Image src="/images/logo.png" fill alt="logo" />
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
