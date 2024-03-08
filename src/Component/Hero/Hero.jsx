import React, { useEffect } from "react";
import styles from "./Hero.module.css";
import { Link, Events, animateScroll as scroll, scrollSpy } from "react-scroll";

export const Hero = () => {
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
    <div className={styles.conteiner}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Test assignment for front-end developer
        </h1>
        <p className={styles.description}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they&apos;ll be building web interfaces with accessibility
          in mind. They should also be excited to learn, as the world of
          Front-End Development keeps evolving.
        </p>
        <Link
          className={styles.btn}
          href="/"
          to="post"
          smooth={true}
          duration={1000}
        >
          <p className={styles.text}>Sing up</p>
        </Link>
      </div>
    </div>
  );
};
