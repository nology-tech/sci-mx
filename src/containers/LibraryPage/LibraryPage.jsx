import React from "react";
import styles from "./LibraryPage.module.scss";
import workoutimage from "../../assets/images/workout/workout-2-image.jpg";

const LibraryPage = () => {
  return (
    <div className={styles.container}>
      <input className={styles.searchBar} type="text" placeholder="SEARCH..." />

      <div className={styles.buttoncontainer}>
        <button className={styles.buttoncontainer__button}>LEGS</button>
        <button className={styles.buttoncontainer__button}>ARMS</button>
        <button className={styles.buttoncontainer__button}>CHEST</button>
        <button className={styles.buttoncontainer__button}>CARDIO</button>
      </div>

      <div className={styles.workoutcontainer}>
        <div className={styles.workoutconatiner__image}>
          <img src={workoutimage} alt="" />
        </div>
        <div className={styles.workoutconatiner__image}>
          <img src={workoutimage} alt="" />
        </div>
        <div className={styles.workoutconatiner__image}>
          <img src={workoutimage} alt="" />
        </div>
        <div className={styles.workoutconatiner__image}>
          <img src={workoutimage} alt="" />
        </div>
        <div className={styles.workoutconatiner__image}>
          <img src={workoutimage} alt="" />
        </div>
        <div className={styles.workoutconatiner__image}>
          <img src={workoutimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
