import React from "react";
import styles from "./WorkoutPage.module.scss";
import Workout from "../../components/Workout/Workout";
import workoutimage1 from "../../assets/images/WorkoutCutouts/workout2.png";
import workoutimage2 from "../../assets/images/WorkoutCutouts/workout3.png";
import workoutimage3 from "../../assets/images/WorkoutCutouts/workout5.png";

const WorkoutPage = () => {

  const workoutArray =[
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
    rounds: "AS MANY ROUNDS AS POSSIBLE IN 5 MINS",
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


  return (
    <div className={styles.container}>
      <Workout workout={workoutArray[2]}/>
    </div>
  );
};

export default WorkoutPage;
