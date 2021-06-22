import React from "react";
import styles from "./Workout.module.scss";
import workoutimage from "../../assets/images/workout/workoutimage.png";

const Workout = () => {
  const test = {
    title: "NO REST FOR THE WICKED",
    rounds: "3 ROUNDS FOR TIME",
    exercises: [
      "15 BURPEES",
      "30 AIR SQUATS",
      "15 BURPEES",
      "30 LUNGES",
      "15 BURPEES",
      "30 SITUPS",
    ],
  };
  const getExerciseJSX = (exercise) => {
    const split = exercise.split(" ");
    const text = [...split].shift();
    return (
      <li>
        split[0] <span>text.join(" ")</span>
      </li>
    );
  };
  return (
    <>
      <div className={styles.workoutContainer}>
        <div className={styles.workoutContainer__title}>{test.title}</div>
        <div className={styles.workoutContainer__rounds}>{test.rounds}</div>
        <div className={styles.workoutContainer__body}>
          <div className={styles.workoutContainer__body__exercises}>
            <ul>
              <li>
                15 <span>BURPEES</span>
              </li>
              <li>
                30 <span>AIR SQUATS</span>
              </li>
              <li>
                15 <span>BURPEES</span>
              </li>
              <li>
                30 <span>LUNGES</span>
              </li>
              <li>
                15 <span>BURPEES</span>
              </li>
              <li>
                30 <span>SITUPS</span>
              </li>
            </ul>
          </div>
          <div className={styles.workoutContainer__body__image}>
            <img src={workoutimage} alt="workout"></img>
          </div>
        </div>
        <div className={styles.workoutContainer__rests}>
          NO REST BETWEEN ROUNDS
        </div>
      </div>
    </>
  );
};

export default Workout;
