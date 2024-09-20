import React, { useState } from "react";
import style from "./MainMenuDropdown.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

interface MainMenuDropdownProps {
  title: string;
  href: string;
  className?: string;
  items: { label: string; href: string }[];
}

const MainMenuDropdown: React.FC<MainMenuDropdownProps> = ({ title, href, items, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${className} ${style["dropdown-wrapper"]}`}>
      <Link href={href} className={style["dropdown-title"]}>
        {title}
        <motion.span
          className={style["dropdown-icon"]}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={toggleDropdown}
        >
          <BsChevronDown />
        </motion.span>
      </Link>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        exit={{ height: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className={style["dropdown-content"]}>
          {items.map((item, index) => (
            <Link key={index} href={item.href} className={style["dropdown-item"]}>
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MainMenuDropdown;
