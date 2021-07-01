import React from "react";
import styles from "./WorkoutCategories.module.scss";

const WorkoutCategories = (props) => {
  return (
    <li className={styles.categories__item}>
      <button
        className={`${styles.categories__link}`}
        onClick={props.handleCategory}
      >
        {props.category}
      </button>
    </li>
  );
};

export default WorkoutCategories;
