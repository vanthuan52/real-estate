import React from "react";

import style from "./MainFooter.module.scss";
import Image from "next/image";
import Link from "next/link";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";

const MainFooter = () => {
  return (
    <footer className={style["footer"]}>
      <div className="container">
        <div className={style["footer-wrapper"]}>
          <div className={style["footer-logo"]}>
            <Image src={"/images/main/logo.png"} alt="logo" fill />
          </div>
          <div className={style["menu"]}>
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
          </div>
          <div className={style["social"]}>
            <Link href={"#"}>
              <FaFacebookF size={18} />
            </Link>
            <Link href={"#"}>
              <FaInstagram size={22} />
            </Link>
            <Link href={"#"}>
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
