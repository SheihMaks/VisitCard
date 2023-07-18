import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
    return (<div className={styles.heroSection}>
        <div>
            <h1><a href="#contacts">Cristofer Robbin</a></h1>
            <div>
                <a href="ourWorks">works</a>
                <a href="#aboutUs">about</a>
            </div>
        </div>
    </div>)
}

export default Hero;