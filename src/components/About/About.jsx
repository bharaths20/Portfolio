import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./About.module.css";
export const About = () => {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImg}
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a Frontend developer with experience in building responsive
                and optimised sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised Backend systems
                and API's experience
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
