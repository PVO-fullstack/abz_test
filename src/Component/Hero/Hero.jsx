import React from "react";
import { Button } from "../Button/Button";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Test assignment for front-end developer
        </h1>
        <p className={styles.description}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <a className={styles.btn} href="#post">
          <p className={styles.text}>Sing up</p>
        </a>
      </div>
    </div>
  );
};
