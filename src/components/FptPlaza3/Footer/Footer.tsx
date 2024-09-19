import React from "react";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className="container">
        <div className={styles["footer-wrapper"]}>
          <div className={styles["footer-copyright"]}>©2024 XXXXX XXXX All Rights Reserved</div>

          <div className={styles["menu"]}>
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

          <div className={styles["social"]}>
            <Link href={"#"}>
              <FaFacebookF size={18} />
            </Link>
            <Link href={"#"}>
              <FaInstagram size={22} />
            </Link>
            <Link href={"#"}>
              <FaTwitter size={22} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
