import React from "react";
import { useParams } from "react-router-dom";
import styles from "./WorkoutPage.module.scss";
import Workout from "../../components/Workout/Workout";
import workoutimage1 from "../../assets/images/WorkoutCutouts/workout2.png";
import workoutimage2 from "../../assets/images/WorkoutCutouts/workout3.png";
import workoutimage3 from "../../assets/images/WorkoutCutouts/workout6.png";
import Timer from "../../components/Timer";
const WorkoutPage = () => {
  const workoutArray = [
    {
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
      rests: "NO REST BETWEEN ROUNDS",
      img: workoutimage1,
    },
    {
      title: "TIME TO GET LEGLESS",
      rounds: "EMOM FOR 15 MINS",
      exercises: [
        "4 AIR SQUATS",
        "4 JUMP SQUATS",
        "4 REVERSE LUNGES",
        "4 JUMPING LUNGES",
      ],
      rests: "16 REPS COMPLETED EACH MINUTE",
      img: workoutimage2,
    },
    {
      title: "CORE FINISHER",
      rounds: "AS MANY ROUNDS IN 5 MINS",
      exercises: [
        "10 RUSSIAN TWISTS",
        "10 BUTTERFLY SIT-UPS",
        "10 BICYCLE KICKS",
        "10 LEG RAISES",
      ],
      rests: "NO RESTS",
      img: workoutimage3,
    },
  ];

  const { workoutID } = useParams();
  return (
    <div className={styles.container}>
      <Workout workout={workoutArray[workoutID]} />

      <div className={styles.trackerBlock}>
        <Timer
          className={styles.timerContainer}
          status={false}
          runningTime={0}
        />
      </div>

      {/* <div className={styles.trackerBlock}></div> */}
    </div>
  );
};

export default WorkoutPage;
