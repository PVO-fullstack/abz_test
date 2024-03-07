import { Header } from "@/Component/Header/Header";
import { Hero } from "@/Component/Hero/Hero";
import styles from "./page.module.css";
import { OurUsers } from "@/Component/OurUsers/OurUsers";
import { PostForm } from "@/Component/PostForm/PostForm";
import { getPosition } from "@/utils/user";
import { use } from "react";

export default function Home() {
  const positions = use(getPosition());

  return (
    <main>
      <div>
        <Header />
        <div className={styles.conteiner}>
          <Hero />
          <OurUsers />
          <PostForm positions={positions} />
        </div>
      </div>
    </main>
  );
}
