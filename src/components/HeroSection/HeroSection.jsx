import React from "react";
import styles from "./HeroSection.module.scss";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import workout2 from "../../assets/images/workout/workout-2-image.jpg";
import workout3 from "../../assets/images/workout/workout-3-image.jpg";
import workout4 from "../../assets/images/workout/workout-4-image.jpg";
import workout5 from "../../assets/images/workout/workout-5-image.jpg";
import workout6 from "../../assets/images/workout/workout-6-image.jpg";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { BiRun } from "react-icons/bi";

const HeroSection = () => {
  let x = Math.round(Math.random() * 4);
  const workoutsArr = [
    {
      img: workout2,
      name: "NO REST FOR THE WICKED",
    },
    {
      img: workout3,
      name: "TIME TO GET LEGLESS",
    },
    {
      img: workout4,
      name: "COUNTDOWN CONUNDRUM",
    },
    {
      img: workout5,
      name: "20:20 VISION",
    },
    {
      img: workout6,
      name: "CORE FINISHER",
    },
  ];

  const getRandWorkout = () => {};

  return (
    <section className={styles.hero}>
      <div className={styles.hero__title}>
        <h1 className={styles.hero__heading}>Hello Will</h1>
        <h4 className={styles.hero__subheading}>Welcome back!</h4>
      </div>
      <div className={styles.hero__image_container}>
        <img className={styles.hero__image} src={workout3} alt="workout" />
        <Link to="/workout" className={styles.hero__image_link}>
          NO REST FOR THE WICKED
        </Link>
      </div>

      <Link to="/workout" className={styles.hero__activity_btn}>
        My Activity
        <BiRun className={styles.hero__activity_img}></BiRun>
      </Link>

      <LinkScroll to="#product">
        <FaArrowAltCircleDown
          className={styles.hero__arrow_btn}
        ></FaArrowAltCircleDown>
      </LinkScroll>
    </section>
  );
};

export default HeroSection;
