import React from "react";
import Link from "next/link";
import { FaPhone, FaFacebookMessenger } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";

import styles from "./FloatingAction.module.scss";

const FloatingAction = () => {
  return (
    <div className={styles.list}>
      <Link href={"#"} className={styles.item}>
        <FaPhone />
      </Link>
      <Link href={"#"} className={styles.item}>
        <SiZalo />
      </Link>
      <Link href={"#"} className={styles.item}>
        <FaFacebookMessenger />
      </Link>
    </div>
  );
};

export default FloatingAction;
