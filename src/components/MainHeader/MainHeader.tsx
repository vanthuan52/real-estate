"use client";

import React, { useEffect, useMemo, useState } from "react";

import Image from "next/image";

import { PROJECT_SLUG } from "@/utils/constant";
import MainMenuDropdown from "../MainMenuDropdown/MainMenuDropdown";
import { usePathname } from "next/navigation";
import { Link } from "@/lib/router-events";
import { configResponsive, useResponsive } from "ahooks";

import styles from "./MainHeader.module.scss";
import variables from "@/styles/_variables.module.scss";

configResponsive({
  sm: parseInt(variables.breakpointSM),
  md: parseInt(variables.breakpointMD),
  lg: parseInt(variables.breakpointLG),
  xl: parseInt(variables.breakpointXL),
  "2xl": parseInt(variables.breakpoint2XL),
});

const MainHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const responsive = useResponsive();
  const pathname = usePathname();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  useEffect(() => {
    if (showMenu) setShowMenu(false);
  }, [pathname]);

  const menuClassName = useMemo(() => {
    let classNames: string[] = ["menu"];
    if (!responsive.lg) {
      classNames.push("menu-mobile");
      if (showMenu) {
        classNames.push("menu-mobile--open");
      }
    }
    return classNames.map((className) => `${styles[className]}`).join(" ");
  }, [responsive, showMenu]);

  const renderMenu = (
    <div className={`container ${menuClassName}`}>
      <Link href="/" className={styles["menu-item"]}>
        Trang chủ
      </Link>
      <div className={styles["menu-item"]}>
        <MainMenuDropdown
          href="/projects"
          title="Dự án"
          items={[
            { label: "FPT Plaza 3", href: `/projects/${PROJECT_SLUG.FPT_PLAZA_3}` },
            { label: "Sun Symphony Residence", href: `/projects/${PROJECT_SLUG.SUN_SYMPHONY}` },
          ]}
        />
      </div>
      <Link href="#" className={styles["menu-item"]}>
        Bài đăng
      </Link>
      <Link href="#" className={styles["menu-item"]}>
        Video
      </Link>
      <Link href="#" className={styles["menu-item"]}>
        Liên hệ
      </Link>
    </div>
  );

  return (
    <header className={styles["header"]}>
      <div className="container">
        <div className={styles["header-wrapper"]}>
          <Link href="/" className={styles["header-logo"]}>
            <Image src={"/images/main/logo.png"} alt="logo" fill />
          </Link>

          {renderMenu}

          <div
            className={`${styles["hamburger"]} ${showMenu && styles["hamburger--active"]}`}
            onClick={toggleMenu}
          >
            <div className={styles["hamburger-slices"]}>
              <div className={styles["hamburger-slice"]}></div>
              <div className={styles["hamburger-slice"]}></div>
              <div className={styles["hamburger-slice"]}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
