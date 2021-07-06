import React, { useEffect, useState, useCallback } from "react";
import styles from "./Workout.module.scss";
import fingersBlue from "../../assets/images/Fingers/1.svg";
import fingersRed from "../../assets/images/Fingers/2.svg";
import fingersGreen from "../../assets/images/Fingers/3.svg";
import fingersYellow from "../../assets/images/Fingers/4.svg";
import fingersOrange from "../../assets/images/Fingers/5.svg";
import workoutimage1 from "../../assets/images/WorkoutCutouts/workout2.png";
import workoutimage2 from "../../assets/images/WorkoutCutouts/workout3.png";
import workoutimage3 from "../../assets/images/WorkoutCutouts/workout6.png";

const Workout = (props) => {
  const { workout } = props;
  const [fingers, setFingers] = useState(fingersBlue);
  const [workoutImage, setWorkoutImage] = useState(workoutimage1);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomFingers = useCallback(() => {
    const int = getRandomInt(1, 5);

    switch (int) {
      case 1:
        setFingers(fingersRed);
        break;
      case 2:
        setFingers(fingersBlue);
        break;
      case 3:
        setFingers(fingersGreen);
        break;
      case 4:
        setFingers(fingersYellow);
        break;
      case 5:
        setFingers(fingersOrange);
        break;
      default:
        setFingers(fingersBlue);
    }
  }, []);

  const getRandomWorkoutImage = useCallback(() => {
    const int = getRandomInt(0, 2);

    switch (int) {
      case 0:
        setWorkoutImage(workoutimage1);
        break;
      case 1:
        setWorkoutImage(workoutimage2);
        break;
      case 2:
        setWorkoutImage(workoutimage3);
        break;
      default:
        setWorkoutImage(workoutimage1);
    }
  }, []);

  useEffect(() => {
    getRandomFingers();
    getRandomWorkoutImage();
  }, [getRandomFingers, getRandomWorkoutImage]);

  const getExerciseJSX = (exercise, index) => {
    const split = exercise.split(" ");
    const letter = split.shift();

    return (
      <li key={index}>
        {letter} <span>{split.join(" ")}</span>
      </li>
    );
  };

  return (
    <div className={styles.workoutContainer}>
      <div className={styles.workoutContainer__title}>{workout.title}</div>
      <div className={styles.workoutContainer__rounds}>{workout.rounds}</div>
      <div className={styles.workoutContainer__body}>
        <ul>{workout.exercises.map(getExerciseJSX)}</ul>
        <img
          src={workoutImage}
          alt="workout"
          className={styles.workoutpic}
        ></img>
        <img src={fingers} alt="fingers" className={styles.fingers}></img>
      </div>
      <div className={styles.workoutContainer__rests}>{workout.rests}</div>
    </div>
  );
};

export default Workout;
