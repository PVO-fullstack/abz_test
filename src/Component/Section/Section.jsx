import React from "react";
import styles from "./Section.module.css";

export const Section = ({ children, title, id }) => {
  return (
    <div id={id} className={styles.conteiner}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};
