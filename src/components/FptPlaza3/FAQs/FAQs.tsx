import React from "react";
import HeadingSection from "../HeadingSection/HeadingSection";

import styles from "./FAQs.module.scss";

const FAQs = () => {
  return (
    <section className={styles["faqs"]}>
      <div className="container">
        <HeadingSection title="FAQs" />
      </div>
    </section>
  );
};

export default FAQs;
