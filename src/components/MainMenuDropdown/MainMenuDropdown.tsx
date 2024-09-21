"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { Link, useRouter } from "@/lib/router-events";

import styles from "./MainMenuDropdown.module.scss";

interface MainMenuDropdownProps {
  title: string;
  href: string;
  items: { label: string; href: string }[];
}

const MainMenuDropdown: React.FC<MainMenuDropdownProps> = ({ title, href, items }) => {
  const router = useRouter();
  const [collapsiable, setCollapsiable] = useState(false);

  const handleNavigate = () => {
    router.push(href);
  };

  const handleToggleCollapse = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    setCollapsiable(!collapsiable);
  };

  return (
    <div className={styles["dropdown"]}>
      <button type="button" className={styles["dropdown-trigger"]} onClick={handleNavigate}>
        <span className={styles["dropdown-trigger__text"]}>{title}</span>
        <motion.span
          className={styles["dropdown-trigger__icon"]}
          animate={{ rotate: collapsiable ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleToggleCollapse}
        >
          <BsChevronDown />
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{ height: collapsiable ? "auto" : 0 }}
        exit={{ height: 0 }}
        transition={{ duration: 0.3 }}
        className={styles["dropdown-menu"]}
      >
        <div className={styles["dropdown-menu__inner"]}>
          {items.map((item: any, index: number) => (
            <Link key={index} href={item.href} className={styles["dropdown-item"]}>
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MainMenuDropdown;
