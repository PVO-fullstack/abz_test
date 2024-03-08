"use client";

import { Header } from "@/Component/Header/Header";
import { Hero } from "@/Component/Hero/Hero";
import styles from "./page.module.css";
import { OurUsers } from "@/Component/OurUsers/OurUsers";
import { PostForm } from "@/Component/PostForm/PostForm";
import { useState } from "react";

export default function Home() {
  const [newUser, setNewUser] = useState(false);

  const changeCountUser = () => {
    setNewUser(!newUser);
  };

  return (
    <main>
      <div>
        <Header />
        <div className={styles.conteiner}>
          <Hero />
          <OurUsers newUser={newUser} change={changeCountUser} />
          <PostForm newUser={changeCountUser} />
        </div>
      </div>
    </main>
  );
}
