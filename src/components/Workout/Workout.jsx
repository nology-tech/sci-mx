import React, { useEffect, useState } from "react";
import styles from "./Workout.module.scss";
import fingersBlue from "../../assets/images/Fingers/1.svg";
import fingersRed from "../../assets/images/Fingers/2.svg";
import fingersGreen from "../../assets/images/Fingers/3.svg";
import fingersYellow from "../../assets/images/Fingers/4.svg";
import fingersOrange from "../../assets/images/Fingers/5.svg";

const Workout = props => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    const int = getRandomInt(1, 5);
    console.log(int);

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

  const [fingers, setFingers] = useState(fingersBlue);

  const { workout } = props;

  const getExerciseJSX = exercise => {
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
        <img src={fingers} alt="fingers2" className={styles.fingers2}></img>
        <div className={styles.workoutContainer__title}>{workout.title}</div>
        <div className={styles.workoutContainer__rounds}>{workout.rounds}</div>
        <div className={styles.workoutContainer__body}>
          <ul>{workout.exercises.map(getExerciseJSX)}</ul>
          <img src={workout.img} alt="workout" className={styles.workoutpic}></img>
          <img src={fingers} alt="fingers" className={styles.fingers}></img>
          {/* <div className={styles.workoutContainer__body__image}>
          </div> */}
        </div>

        <div className={styles.workoutContainer__rests}>{workout.rests}</div>
      </div>
    </>
  );
};

export default Workout;
