import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
    return (<div className={styles.heroSection}>
        <div className={styles.navContainer}>
            <h1><a href="#contacts">Cristofer Robbin</a></h1>
            <ul className={styles.navLinks}>
                <li><a href="#ourWorks">works</a></li>
                <li><a href="#aboutUs">about</a></li>
            </ul>
        </div>
    </div>)
}

export default Hero;