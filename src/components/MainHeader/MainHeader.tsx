"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import * as motion from "framer-motion/client";
import { useResponsive, useMount } from "ahooks";
import { BsChevronDown } from "react-icons/bs";

import style from "./MainHeader.module.scss";
import { PROJECT_SLUG } from "@/utils/constant";
import MainMenuDropdown from "../MainMenuDropdown/MainMenuDropdown";
import { usePathname, useRouter } from "next/navigation";

const MainHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const responsive: any = useResponsive();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  useEffect(() => {
    if (showMenu) setShowMenu(false);
  }, [pathname]);

  const renderMobileMenu = (
    <AnimatePresence>
      {showMenu && (
        <motion.div
          className={style["menu"]}
          initial={{ opacity: 0, y: "-20%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-20%" }}
          transition={{ duration: 0.2 }}
        >
          <Link href="#" className={style["menu-item"]}>
            Trang chủ
          </Link>
          <MainMenuDropdown
            title="Dự án"
            href="projects"
            className={style["menu-item"]}
            items={[
              { label: "FPT Plaza 3", href: `projects/${PROJECT_SLUG.FPT_PLAZA_3}` },
              { label: "Sun Symphony Residence", href: `projects/${PROJECT_SLUG.SUN_SYMPHONY}` },
            ]}
          />
          <Link href="#" className={style["menu-item"]}>
            Bài đăng
          </Link>
          <Link href="#" className={style["menu-item"]}>
            Video
          </Link>
          <Link href="#" className={style["menu-item"]}>
            Liên hệ
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const renderDesktopMenu = (
    <div className={style["menu"]}>
      <Link href="#" className={style["menu-item"]}>
        Trang chủ
      </Link>
      <Link href="projects" className={`${style["menu-item-dropdown"]} ${style["menu-item"]}`}>
        <div className={style["menu-item"]}>Dự án</div>
        <BsChevronDown />
        <div className={style["dropdown"]}>
          <Link href={`projects/${PROJECT_SLUG.FPT_PLAZA_3}`} className={style["dropdown-item"]}>
            FPT Plaza 3
          </Link>
          <Link href={`projects/${PROJECT_SLUG.SUN_SYMPHONY}`} className={style["dropdown-item"]}>
            Sun Symphony Residence
          </Link>
        </div>
      </Link>
      <Link href="#" className={style["menu-item"]}>
        Bài đăng
      </Link>
      <Link href="#" className={style["menu-item"]}>
        Video
      </Link>
      <Link href="#" className={style["menu-item"]}>
        Liên hệ
      </Link>
    </div>
  );

  if (!mounted) return;

  return (
    <header className={style["header"]}>
      <div className="container">
        <div className={style["header-wrapper"]}>
          <div className={style["header-logo"]}>
            <Image src={"/images/main/logo.png"} alt="logo" fill />
          </div>

          {responsive.lg ? renderDesktopMenu : renderMobileMenu}

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
