"use client";

import React, { useEffect, useState } from "react";

import style from "./MainHeader.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import * as motion from "framer-motion/client";
import { configResponsive, useResponsive } from "ahooks";

configResponsive({
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1340,
});

const MainHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const responsive = useResponsive();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  useEffect(() => {
    if (responsive.lg && showMenu) setShowMenu(false);
  }, [responsive]);

  const renderMenuContent = (
    <>
      <Link href="#">
        <div className={style["menu-item"]}>Trang chủ</div>
      </Link>
      <Link href="#">
        <div className={style["menu-item"]}>Dự án</div>
      </Link>
      <Link href="#">
        <div className={style["menu-item"]}>Bài đăng</div>
      </Link>
      <Link href="#">
        <div className={style["menu-item"]}>Video</div>
      </Link>
      <Link href="#">
        <div className={style["menu-item"]}>Liên hệ</div>
      </Link>
    </>
  );

  return (
    <header className={style["header"]}>
      <div className="container">
        <div className={style["header-wrapper"]}>
          <div className={style["header-logo"]}>
            <Image src={"/images/main/logo.png"} alt="logo" fill />
          </div>

          {responsive.lg ? (
            <div className={style["menu"]}>{renderMenuContent}</div>
          ) : (
            <AnimatePresence>
              {showMenu && (
                <motion.div
                  className={style["menu"]}
                  initial={{ opacity: 0, y: "-20%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, y: "-20%" }}
                  transition={{ duration: 0.2 }}
                >
                  {renderMenuContent}
                </motion.div>
              )}
            </AnimatePresence>
          )}

          <div
            className={`${style["hamburger"]} ${showMenu && style["hamburger--active"]}`}
            onClick={toggleMenu}
          >
            <div className={style["hamburger-slices"]}>
              <div className={style["hamburger-slice"]}></div>
              <div className={style["hamburger-slice"]}></div>
              <div className={style["hamburger-slice"]}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
