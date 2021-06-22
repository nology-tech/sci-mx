import React from "react";
import styles from "./Workout.module.scss";

const Workout = (props) => {

  const { workout } = props;

  const getExerciseJSX = (exercise) => {
    const split = exercise.split(" ");
    const letter = split[0];
    split.shift();
    // const workoutString = text.join(" ");

    return (
      <li>
        {letter} <span>{split.join(" ")}</span>
      </li>
    );
  };

  return (
    <>
      <div className={styles.workoutContainer}>
        <div className={styles.workoutContainer__title}>{workout.title}</div>
        <div className={styles.workoutContainer__rounds}>{workout.rounds}</div>
        <div className={styles.workoutContainer__body}>
          <div className={styles.workoutContainer__body__exercises}>
            <ul>
              {workout.exercises.map(getExerciseJSX)}
            </ul>
          </div>
        </div>
        <div className={styles.workoutContainer__body__image}>
            <img src={workout.img} alt="workout"></img>
          </div>
        <div className={styles.workoutContainer__rests}>
        {workout.rests}  
        </div>
      </div>
    </>
  );
};

export default Workout;
