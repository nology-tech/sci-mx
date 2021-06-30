import React, { useState } from "react";
import styles from "./LibraryPage.module.scss";
import WorkoutCard from "../../components/WorkoutCard";
import { workoutsCategory } from "../../data/workoutLibraryData";

const LibraryPage = () => {
  console.log(workoutsCategory);
  return (
    <div className={styles.container}>
      {/* <input className={styles.searchBar} type="text" placeholder="SEARCH..." />*/}

      <div className={styles.categories}>
        <ul className={styles.categories__lists}>
          <li className={styles.categories__items}>
            <button className={`${styles.categories__link}`}>Legs</button>
          </li>
          <li className={styles.categories__items}>
            <button className={styles.categories__link}>Arms</button>
          </li>
          <li className={styles.categories__items}>
            <button className={styles.categories__link}>Chest</button>
          </li>
          <li className={styles.categories__items}>
            <button className={styles.categories__link}>Back</button>
          </li>
        </ul>
      </div>

      <div className={styles.workouts}>
        <WorkoutCard workoutName="Jump Squats" />
        <WorkoutCard workoutName="Split Squats" />
        <WorkoutCard workoutName="Pistol Squats" />
        <WorkoutCard workoutName="Single Leg Squats" />
        <WorkoutCard workoutName="Up-down Squats" />
        <WorkoutCard workoutName="W Superman" />
      </div>
    </div>
  );
};

export default LibraryPage;
