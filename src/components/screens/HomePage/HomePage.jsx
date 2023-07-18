import React from "react";
import styles from "./HomePage.module.scss"
import AboutUs from "components/sections/AboutUs";
import Hero from "components/sections/Hero";
import OurWorks from "components/sections/OurWorks";


const HomePage = () => {
    return (
        // <div className={styles.homePageContainer}>
        <><Hero />
        <AboutUs/>
        <OurWorks /></>
        // </div >
        )
}

export default HomePage;