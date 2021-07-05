import React, { useContext } from "react";
import styles from "./HeroSection.module.scss";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import workout2 from "../../assets/images/workout/workout-2-image.jpg";
// import workout3 from "../../assets/images/workout/workout-3-image.jpg";
// import workout4 from "../../assets/images/workout/workout-4-image.jpg";
// import workout5 from "../../assets/images/workout/workout-5-image.jpg";
// import workout6 from "../../assets/images/workout/workout-6-image.jpg";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { BiRun } from "react-icons/bi";

import { UserContext } from "../../context/UserProvider/UserProvider";

const HeroSection = () => {
  // let randNum = Math.round(Math.random() * 1);
  // const workoutsArr = [workout2, workout3, workout4, workout5, workout6];
  // let randWorkout = workoutsArr[randNum];

  const userContext = useContext(UserContext);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__title}>
        <h1 className={styles.hero__heading}>
          Hello, {userContext.user ? userContext.user.displayName : ""}
        </h1>
        <h4 className={styles.hero__subheading}>Welcome back!</h4>
      </div>
      <h3 className={styles.workout__title}>Today's Workout</h3>
      <div className={styles.hero__image_container}>
        <Link to="/workout/0">
          <img className={styles.hero__image} src={workout2} alt="workout" />
        </Link>
      </div>

      <Link to="/tracker" className={styles.hero__activity_btn}>
        My Activity
        <BiRun className={styles.hero__activity_img}></BiRun>
      </Link>

      <LinkScroll to="product" smooth={true}>
        <FaArrowAltCircleDown
          className={styles.hero__arrow_btn}
        ></FaArrowAltCircleDown>
      </LinkScroll>
    </section>
  );
};

export default HeroSection;
