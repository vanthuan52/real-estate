import React from "react";
import HeadingSection from "../HeadingSection/HeadingSection";

import styles from "./Stories.module.scss";

const Stories = () => {
  return (
    <section className={styles["story"]}>
      <div className="container">
        <HeadingSection title="Insight & Stories" />
      </div>
    </section>
  );
};

export default Stories;
