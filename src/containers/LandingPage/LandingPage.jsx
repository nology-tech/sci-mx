import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.scss";
import heroImage from "../../assets/images/workout/workout-2-image.jpg";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { BiRun } from "react-icons/bi";

const LandingPage = () => {
  return (
    <main className={styles.container}>
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
          <button></button>
        </FaArrowAltCircleDown>
      </section>
    </main>
  );
};

export default LandingPage;
