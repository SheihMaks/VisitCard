import React from "react";
import styles from "./AboutUs.module.scss";
import aboutUs from "images/AboutUs.svg";

const AboutUs = () => {
    return (<section className={styles.aboutUsSectionContainer}>
        <h2 id="aboutUs">Cristofer Robbin</h2>
            <p>The most popular developer under the age of 30, he has revolutionized the understanding of urban planning and has become the most desirable candidate for receiving orders</p>
        <img src={aboutUs } alt="img"/>
    </section>)
}

export default AboutUs;