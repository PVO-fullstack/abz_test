import React, { useEffect } from "react";
import styles from "./UserMenu.module.css";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";

export const UserMenu = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {});

    Events.scrollEvent.register("end", function (to, element) {});

    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <div className={styles.btn_conteiner}>
      <Link
        className={styles.btn}
        href="/"
        to="users"
        smooth={true}
        duration={1000}
      >
        Users
      </Link>
      <Link
        className={styles.btn}
        href="/"
        to="post"
        smooth={true}
        duration={1000}
      >
        Sing up
      </Link>
    </div>
  );
};
