"use client";

import { Header } from "@/Component/Header/Header";
import { Hero } from "@/Component/Hero/Hero";
import styles from "./page.module.css";
import { OurUsers } from "@/Component/OurUsers/OurUsers";
import { PostForm } from "@/Component/PostForm/PostForm";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <div className={styles.conteiner}>
          <Hero />
          <OurUsers />
          <PostForm />
        </div>
      </div>
    </main>
  );
}
