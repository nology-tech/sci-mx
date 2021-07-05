import React from "react";
import styles from "./WorkoutCategories.module.scss";

const WorkoutCategories = (props) => {
  const isCategoryActive =
    props.category === props.currentCategory && styles.categories__link_active;

  return (
    <li className={styles.categories__item}>
      <button
        className={`${styles.categories__link} ${isCategoryActive}`}
        onClick={props.handleCategory}
      >
        {props.category}
      </button>
    </li>
  );
};

export default WorkoutCategories;
