import React from "react";
import { Link } from "react-router-dom";
import styles from "./WorkoutCard.module.scss";
import workoutImgExample from "../../assets/images/workout/workoutExample.jpg";
const WorkoutCard = (props) => {
  const { workoutName } = props;

  return (
    <Link to="/workout/1" className={styles.workout}>
      <p className={styles.workout__heading}>{workoutName}</p>
    </Link>
  );
};

export default WorkoutCard;
