import react from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Bharath</h1>
        <p className={styles.description}>
          I am a full-stack developer with 2 years of experience using React and
          NodeJs. Reachout if you'd like to learn more!!
        </p>
        <a className={styles.contactBtn} href="mailto:bharathing127@gmail.com">
          Conatct Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image of Me"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
