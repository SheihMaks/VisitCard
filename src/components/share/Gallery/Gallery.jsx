import React from "react";
import styles from "./Gallery.module.scss";
import img1 from "../../../images/galleryDesc/1.png";
import img2 from "../../../images/galleryDesc/2.png";
import img3 from "../../../images/galleryDesc/3.png";
import img4 from "../../../images/galleryDesc/4.png";
import img5 from "../../../images/galleryDesc/5.png";
import img6 from "../../../images/galleryDesc/6.png";

const Gallery = () => {
  return (
    <ul className={styles.gallery}>
      <li className={styles.galleryItem}>
        <img alt="building1" src={img1} />
      </li>
      <li className={styles.galleryItem}>
        <img alt="building2" src={img2} />
      </li>
      <li className={styles.galleryItem}>
        <img alt="building3" src={img3} />
      </li>
      <li className={styles.galleryItem}>
        <img alt="building4" src={img4} />
      </li>
      <li className={styles.galleryItem}>
        <img alt="building5" src={img5} />
      </li>
      <li className={styles.galleryItem}>
        <img alt="building6" src={img6} />
      </li>
    </ul>
  );
};

export default Gallery;
