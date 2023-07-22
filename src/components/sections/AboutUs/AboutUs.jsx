import React from "react";
import styles from "./AboutUs.module.scss"
import icons from "images/icons.svg"

const AboutUs = () => {
    return (<div className={styles.aboutUsSectionContainer}>
        <h2 id="aboutUs">Cristofer Robbin</h2>
            <p>The most popular developer under the age of 30, he has revolutionized the understanding of urban planning and has become the most desirable candidate for receiving orders</p>
            <svg>
                <use href={icons + "#icon-aboutUs"}/>
            </svg>
    </div>)
}

export default AboutUs;