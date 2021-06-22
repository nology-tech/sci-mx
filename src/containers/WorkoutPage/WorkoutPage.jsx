import React from "react";
import styles from "./WorkoutPage.module.scss";
import Workout from "../../components/Workout/Workout";

const WorkoutPage = () => {
  return (
    <div className={styles.container}>
      <Workout/>
    </div>
  );
};

export default WorkoutPage;
