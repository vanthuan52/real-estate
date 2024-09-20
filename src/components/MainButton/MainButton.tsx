import React from "react";

import styles from "./MainButton.module.scss";

type MainButtonProps = {
  children: React.ReactNode;
  size?: "lg" | "md" | "sm";
};

const MainButton = ({ children, size = "md" }: MainButtonProps) => {
  return (
    <button type="button" className={`${styles["button"]} ${styles[size]}`}>
      {children}
    </button>
  );
};

export default MainButton;
