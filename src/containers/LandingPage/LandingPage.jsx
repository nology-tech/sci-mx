import React from "react";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.hero__title}>Hello Will</h1>
        <div className={styles.hero__image_container}>
          <img src="../../assets/images/workout/workout-2-image.jpg" alt="" />
          <button>START WORKOUT</button>
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
