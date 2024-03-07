import React from "react";
import { Button } from "../Button/Button";
import styles from "./UserMenu.module.css";
import { sign_up } from "@/utils/user";
import Link from "next/link";

export const UserMenu = () => {
  return (
    <div className={styles.btn_conteiner}>
      <a className={styles.btn} href="#users">
        Users
      </a>
      <a className={styles.btn} href="#post">
        Sing up
      </a>
    </div>
  );
};
