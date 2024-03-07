import React from "react";
import styles from "./Buttom.module.css";
import classNames from "classnames";

export const Button = ({ type, name, onClick, disabled, className = "" }) => {
  return (
    <button
      className={classNames(styles.btn, className)}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {name}
    </button>
  );
};
