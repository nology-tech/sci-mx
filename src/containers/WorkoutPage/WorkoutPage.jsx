import React from "react";
import { useParams } from "react-router-dom";
import styles from "./WorkoutPage.module.scss";
import Workout from "../../components/Workout/Workout";
import { workoutsCategoryData } from "../../data/workoutLibraryData";
// import workoutimage1 from "../../assets/images/WorkoutCutouts/workout2.png";
// import workoutimage2 from "../../assets/images/WorkoutCutouts/workout3.png";
// import workoutimage3 from "../../assets/images/WorkoutCutouts/workout6.png";
// import { current } from "immer";

const WorkoutPage = () => {
  const { workoutID } = useParams();

  const getWorkoutByCategory = (category) => {
    return workoutsCategoryData[category.toLowerCase()].find(
      (workout) => workout.id.toLowerCase() === workoutID.toLowerCase()
    );
  };

  const getWorkout = () => {
    const category = workoutID.split("-")[0];
    switch (category) {
      case "l":
        console.log("legs");
        return getWorkoutByCategory("legs");
      case "a":
        console.log("arms");
        return getWorkoutByCategory("arms");
      case "c":
        console.log("chest");
        return getWorkoutByCategory("chest");
      case "b":
        console.log("back");
        return getWorkoutByCategory("back");
      default:
        console.log("legs");
        return getWorkoutByCategory("legs");
    }
  };

  return (
    <div className={styles.container}>
      <Workout workout={getWorkout()} />
      <div className={styles.trackerBlock}></div>
    </div>
  );
};

export default WorkoutPage;
