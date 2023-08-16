import React from "react";
import styles from './GalleryItem.module.scss';

const GalleryItem = ({ img, description }) => {
    return (<li className={styles.galleryItem}><img src={img} alt={description} /></li>)
} 

export default GalleryItem;