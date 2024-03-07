import React from "react";
import styles from "./UserCard.module.css";
import Image from "next/image";

export const UserCard = ({ user }) => {
  const { photo, name, position, email, phone } = user;

  return (
    <li className={styles.conteiner}>
      <Image
        className={styles.img}
        src={photo}
        width={100}
        height={100}
        alt={`photo ${name}`}
      />
      <p>{name}</p>
      <div className={styles.description}>
        <p>{position}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </li>
  );
};
