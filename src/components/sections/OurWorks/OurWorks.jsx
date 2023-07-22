import React from "react";
import styles from "./OurWorks.module.scss";
import icons from "../../../images/icons.svg";

const OurWorks = () => {
  return (
    <>
      <section className={styles.ourWorksSection}>
        <div className={styles.ourWorksGallery}>Gallary</div>
        <div className={styles.footer}>
          <div className={styles.footerSocialsBox}>
            <a href="/" target="_blanc" rel="noopener noreferrer">
              <svg className={styles.footerSocialIcon}>
                <use href={icons + "#icon-instagram"} />
              </svg>
            </a>
            <a href="/" target="_blanc" rel="noopener noreferrer">
              <svg className={styles.footerSocialIcon}>
                <use href={icons + "#icon-linkedin"} />
              </svg>
            </a>
          </div>
          <p className={styles.footerText}>Copyright © 2023</p>
        </div>
      </section>
    </>
  );
};

export default OurWorks;
