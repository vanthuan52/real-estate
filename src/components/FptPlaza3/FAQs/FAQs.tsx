"use client";

import React, { useState } from "react";
import HeadingSection from "../HeadingSection/HeadingSection";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";

import styles from "./FAQs.module.scss";

const data = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum et felis vitae elementum. Integer ligula dolor, tincidunt sit amet elementum faucibus, cursus at sapien. Sed tristique nec orci scelerisque bibendum.",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Pellentesque interdum et felis vitae elementum. Integer ligula dolor, tincidunt sit amet elementum faucibus, cursus at sapien. Sed tristique nec orci scelerisque bibendum.",
  },
  {
    question: "Pellentesque interdum et felis vitae elementum?",
    answer:
      "Integer ligula dolor, tincidunt sit amet elementum faucibus. Sed tristique nec orci scelerisque bibendum.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles["faqs"]}>
      <div className="container">
        <HeadingSection title="FAQs" />
        <div className={styles["faqs-wrapper"]}>
          <div className={styles["faqs-title"]}>
            <h3>Frequently Asked Questions</h3>
          </div>
          <div className={styles["faqs-list"]}>
            {data.map((item, index) => (
              <div className={styles["faqs-item"]} key={index}>
                <div className={styles["faqs-item__heading"]} onClick={() => toggleFAQ(index)}>
                  <h5 className={styles["faqs-item__title"]}>{item.question}</h5>
                  <BsChevronDown
                    size={22}
                    style={{
                      flexShrink: 0,
                      transition: "all .3s",
                      transform: activeIndex === index ? "rotate(-180deg)" : "",
                    }}
                  />
                </div>
                <motion.div
                  className={styles["faqs-item__body"]}
                  initial={false}
                  animate={{ height: activeIndex === index ? "auto" : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className={styles["faqs-item__content"]}>{item.answer}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
