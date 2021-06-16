import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.hero__heading}>Hello Will</h1>
        <h4 className={styles.hero__subheading}>Welcome back!</h4>
        <div className={styles.hero__image_container}>
          <img src="../../assets/images/workout/workout-2-image.jpg" alt="" />
          <Link to="/workout">START WORKOUT</Link>
        </div>
        <button>
          My Activity <span>logo</span>
        </button>
        <button>
          <span>ARROW</span>
        </button>
      </section>
    </main>
  );
};

export default LandingPage;
