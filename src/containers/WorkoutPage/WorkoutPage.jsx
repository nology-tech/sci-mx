import React from "react";
import { useParams } from "react-router-dom";
import styles from "./WorkoutPage.module.scss";
import Workout from "../../components/Workout/Workout";
import Timer from "../../components/Timer";
import workoutsCategoryData from "../../Data/workoutsCategoryData.js";

const WorkoutPage = () => {
  const { workoutID } = useParams();

  const getWorkoutByCategory = (category) => {
    return workoutsCategoryData[category.toLowerCase()].find(
      (workout) => workout.id.toLowerCase() === workoutID.toLowerCase()
    );
  };

  const getWorkout = () => {
    const category = workoutID.split("-")[0];
    console.log(category);
    switch (category) {
      case "l":
        console.log("legs");
        return getWorkoutByCategory("legs");
      case "a":
        console.log("legs");
        return getWorkoutByCategory("arms");
      case "c":
        console.log("legs");
        return getWorkoutByCategory("chest");
      case "b":
        console.log("legs");
        return getWorkoutByCategory("back");
      default:
        console.log("legs");
        return getWorkoutByCategory("legs");
    }
  };

  return (
    <div className={styles.container}>
      <Workout workout={getWorkout()} />
      <div className={styles.trackerBlock}>
        <Timer
          className={styles.timerContainer}
          status={false}
          runningTime={0}
        />
      </div>
    </div>
  );
};

export default WorkoutPage;
