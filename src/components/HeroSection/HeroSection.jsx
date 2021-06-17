import React from "react";
import styles from "./HeroSection.module.scss";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import heroImage from "../../assets/images/workout/workout-2-image.jpg";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { BiRun } from "react-icons/bi";

const LandingPageSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__title}>
        <h1 className={styles.hero__heading}>Hello Will</h1>
        <h4 className={styles.hero__subheading}>Welcome back!</h4>
      </div>
      <div className={styles.hero__image_container}>
        <img className={styles.hero__image} src={heroImage} alt="workout" />
        <Link to="/workout" className={styles.hero__image_link}>
          NO REST FOR THE WICKED
        </Link>
      </div>

      <Link to="/workout" className={styles.hero__activity_btn}>
        My Activity
        <BiRun className={styles.hero__activity_img}></BiRun>
      </Link>

      <FaArrowAltCircleDown className={styles.hero__arrow_btn}>
        <LinkScroll to="#product"></LinkScroll>
      </FaArrowAltCircleDown>
    </section>
  );
};

export default LandingPageSection;