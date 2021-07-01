import React from "react";
import { Link } from "react-router-dom";
import styles from "./WorkoutCard.module.scss";

const WorkoutCard = (props) => {
  const { workout } = props;

  return (
    <Link to={`/workout/${workout.id}`} className={styles.workout}>
      <p className={styles.workout__heading}>{workout.title}</p>
    </Link>
  );
};

export default WorkoutCard;
