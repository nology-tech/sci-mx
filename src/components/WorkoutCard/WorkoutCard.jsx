import React from "react";
import { Link } from "react-router-dom";
import styles from "./WorkoutCard.module.scss";

const WorkoutCard = (props) => {
  const { workout } = props;

  return (
    <div className={styles.workout}>
      <Link to={`/workout/${workout.id}`} className={styles.workout__link}>
        <p className={styles.workout__heading}>{workout.title}</p>
      </Link>
    </div>
  );
};

export default WorkoutCard;
