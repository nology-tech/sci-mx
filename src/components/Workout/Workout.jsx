import React from "react";
import styles from "./Workout.module.scss";
import workoutimage from "../../assets/images/workout/workoutimage.png";

const Workout = () => {
  return (
    <>
       <div className={styles.workoutContainer}>
        <div className={styles.workoutContainer__title}>NO REST FOR THE WICKED</div>
        <div className={styles.workoutContainer__rounds}>3 ROUNDS FOR TIME</div>
        <div className={styles.workoutContainer__body}>
        <div className={styles.workoutContainer__body__exercises}>
          <ul>
            <li>15 <span>BURPEES</span></li>
            <li>30 <span>AIR SQUATS</span></li>
            <li>15 <span>BURPEES</span> </li>
            <li>30 <span>LUNGES</span></li>
            <li>15  <span>BURPEES</span></li>
            <li>30 <span>SITUPS</span></li>
          </ul>
        </div>
        <div className={styles.workoutContainer__body__image}>
          <img src={workoutimage} alt="workout"></img>
        </div>
      </div>
      <div className={styles.workoutContainer__rests}>NO REST BETWEEN ROUNDS</div>
      </div>
    </>
  );
};

export default Workout;
