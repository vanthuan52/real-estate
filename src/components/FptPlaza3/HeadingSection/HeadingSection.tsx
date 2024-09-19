import React from "react";

import styles from "./HeadingSection.module.scss";

interface HeadingSectionProps {
  children?: React.ReactNode;
  title: string;
}

const HeadingSection = ({ title, children }: HeadingSectionProps) => {
  return (
    <div className={styles["heading"]}>
      <h2 className={styles["title"]}>{title}</h2>
    </div>
  );
};

export default HeadingSection;
