import React from "react";
import { Logo } from "@/Component/Logo/Logo";
import styles from "./Header.module.css";
import { UserMenu } from "../UserMenu/UserMenu";

export const Header = () => {
  return (
    <div className={styles.conteiner}>
      <Logo />
      <UserMenu />
    </div>
  );
};
