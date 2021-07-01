import React, { useState, useEffect } from "react";
import styles from "./LibraryPage.module.scss";
import WorkoutCard from "../../components/WorkoutCard";
import WorkoutCategories from "../../components/WorkoutCategories";
import { workoutsCategoryData } from "../../data/workoutLibraryData";

const LibraryPage = () => {
  const [currentCategory, setCurrentCategory] = useState("legs");
  // const [workouts, setWorkouts] = useState([]);

  const handleCategory = (e) => {
    console.log(e.target.textContent);
    setCurrentCategory(e.target.textContent);
  };

  const renderCategories = () => {
    return workoutsCategoryData[currentCategory].map((workout, i) => (
      <WorkoutCard key={i} workout={workout} />
    ));
  };

  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <ul className={styles.categories__lists}>
          {Object.keys(workoutsCategoryData).map((category) => (
            <WorkoutCategories
              key={category}
              handleCategory={handleCategory}
              category={category}
            />
          ))}
        </ul>
      </div>

      <div className={styles.workouts}>{renderCategories()}</div>
    </div>
  );
};

export default LibraryPage;
