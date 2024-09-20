import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

import styles from "./TextLink.module.scss";

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
}

const TextLink = ({ href, children }: TextLinkProps) => {
  return (
    <Link href={href} className={styles["link"]}>
      {children}
      <BsArrowUpRight size={20} />
    </Link>
  );
};

export default TextLink;
