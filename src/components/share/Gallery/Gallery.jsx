import React from "react";
import styles from "./Gallery.module.scss";
import { works } from "data";
import GalleryItem from "../GalleryItem";

const Gallery = () => {
  return (
    <ul
      className={styles.gallery}
    >
      {works.map(({id,img,description}) => {
        return (
          <GalleryItem
            key={id}
            img={img}
            description={description} />)
      })}
    </ul>
  );
};

export default Gallery;
