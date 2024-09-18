import React from "react";
import Link from "next/link";
import { FaPhone, FaFacebookMessenger } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";

import style from "./FloatingAction.module.scss";
import Image from "next/image";

const FloatingAction = () => {
  return (
    <div className={style.list}>
      <Link href={"#"} className={style.item}>
        <FaPhone />
      </Link>
      <Link href={"#"} className={style.item}>
        <SiZalo />
      </Link>
      <Link href={"#"} className={style.item}>
        <FaFacebookMessenger />
      </Link>
    </div>
  );
};

export default FloatingAction;
