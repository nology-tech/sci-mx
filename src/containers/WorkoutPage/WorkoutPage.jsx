import React from "react";
import { useParams } from "react-router-dom";
import styles from "./WorkoutPage.module.scss";
import Workout from "../../components/Workout/Workout";
import workoutimage2 from "../../assets/images/WorkoutCutouts/workout2.png";
import workoutimage3 from "../../assets/images/WorkoutCutouts/workout3.png";
import workoutimage4 from "../../assets/images/WorkoutCutouts/workout4.png";
import workoutimage5 from "../../assets/images/WorkoutCutouts/workout5.png";
import workoutimage6 from "../../assets/images/WorkoutCutouts/workout6.png";

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
      img: workoutimage2,
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
      img: workoutimage3,
    },
    {
      title: "COUNTDOWN CONUNDRUM",
      rounds: "FOR TIME 10-9-8-7-6-5-4-3-2-1",
      exercises: ["PUSH UP", "AIR SQUAT", "BURPEE"],
      rests: "16 REPS COMPLETED EACH MINUTE",
      img: workoutimage4,
    },
    {
      title: "20:20 VISION",
      rounds: "AS MANY ROUNDS AS POSSIBLE IN 20 MINUTES",
      exercises: ["5 JUMP SQUATS", "10 PUSH-UPS", "5 BURPEES"],
      rests: "",
      img: workoutimage5,
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
      rests: "",
      img: workoutimage6,
    },
  ];

  const { workoutID } = useParams();
  return (
    <div className={styles.container}>
      <Workout workout={workoutArray[workoutID]} />
      <div className={styles.trackerBlock}></div>
    </div>
  );
};

export default WorkoutPage;
