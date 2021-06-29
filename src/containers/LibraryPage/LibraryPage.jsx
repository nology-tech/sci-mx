import React from "react";
import styles from "./LibraryPage.module.scss";
import WorkoutCard from "../../components/WorkoutCard";
// import workoutimage from "../../assets/images/workout/Group.png";

const LibraryPage = () => {
  return (
    <div className={styles.container}>
      {/* <input className={styles.searchBar} type="text" placeholder="SEARCH..." />

      <div className={styles.buttoncontainer}>
        <button className={styles.buttoncontainer__button}>LEGS</button>
        <button className={styles.buttoncontainer__button}>ARMS</button>
        <button className={styles.buttoncontainer__button}>CHEST</button>
        <button className={styles.buttoncontainer__button}>CARDIO</button>
      </div> */}

      <div className={styles.workouts}>
        <WorkoutCard workoutName="Jump Squats" />
        <WorkoutCard workoutName="Bulgarian Split Squats" />
        <WorkoutCard workoutName="Pistol Squats" />
        <WorkoutCard workoutName="Single Leg Squats" />
        <WorkoutCard workoutName="Up-down Squats" />
      </div>
    </div>
  );
};

export default LibraryPage;
