import React from "react";
import styles from "./WorkoutPage.module.scss";
import workoutimage from "../../assets/images/workout/workoutimage.png";

const WorkoutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.workoutContainer}>
        <div className={styles.workoutContainer__title}>NO REST FOR THE WICKED</div>
        <div className={styles.workoutContainer__rounds}>3 ROUNDS FOR TIME</div>
        <div className={styles.workoutContainer__exercises}>
          <ul>
            <li>15 BURPEES</li>
            <li>30 AIR SQUATS</li>
            <li>15 BURPEES</li>
            <li>30 LUNGES</li>
            <li>15 BURPEES</li>
            <li>30 SITUPS</li>
          </ul>
        </div>
        <div className={styles.workoutContainer__image}>
          <img src={workoutimage} alt="workout"></img>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
