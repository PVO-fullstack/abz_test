import React from "react";
import styles from "./Success.module.css";
import Image from "next/image";
import { Close } from "../Close/Close";

export const Success = ({ close }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <Close close={close} />
        <h2 className={styles.title}>User successfully registered</h2>
        <Image
          className={styles.img}
          src="/img/success.jpg"
          width={100}
          height={100}
          alt="happy man"
        />
      </div>
    </div>
  );
};
