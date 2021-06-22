import React from "react";
import styles from "./WorkoutPage.module.scss";
import Workout from "../../components/Workout/Workout";
import workoutimage from "../../assets/images/workout/workoutimage.png";

const WorkoutPage = () => {

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
    rests: "NO REST BETWEEN ROUNDS",
    img: workoutimage,
  };


  return (
    <div className={styles.container}>
      <Workout workout={test}/>
    </div>
  );
};

export default WorkoutPage;
