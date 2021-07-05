import React, { useState, useEffect } from "react";
import styles from "./LibraryPage.module.scss";
import WorkoutCard from "../../components/WorkoutCard";
import WorkoutCategories from "../../components/WorkoutCategories";
import { workoutsCategoryData } from "../../Data/workoutLibraryData";

const LibraryPage = () => {
  const [currentCategory, setCurrentCategory] = useState("legs");
  const [searchWorkout, setSearchWorkout] = useState("");

  const handleCategory = (e) => {
    console.log(e.target.textContent);
    setCurrentCategory(e.target.textContent);
  };

  const renderByCategories = () => {
    return workoutsCategoryData[currentCategory].map((workout, i) => (
      <WorkoutCard key={i} workout={workout} />
    ));
  };

  const renderCategoriesBySearch = (searchTerm) => {
    return workoutsCategoryData[currentCategory].map((workout, i) => (
      <WorkoutCard key={i} workout={workout} />
    ));
  };

  const handleSearchQuery = (e) => {
    setSearchWorkout(e.target.value);

    for (const key in workoutsCategoryData) {
      // console.log(workoutsCategoryData[key]);
      const filteredWorkouts = workoutsCategoryData[key].filter((workout) => {
        // console.log(workout["exercises"].includes(searchWorkout));
        // console.log(workout["exercises"]);
        const bool = workout["exercises"].includes(searchWorkout.toUpperCase());
        // console.log(`logging this:\n${workout["exercises"]}`);
        console.log(
          workout["exercises"].filter((ele) => ele.includes(searchWorkout))
        );
        return bool;
      });
      console.log(filteredWorkouts);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="search workout"
        onChange={handleSearchQuery}
      />

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

      <div className={styles.workouts}>
        {searchWorkout.trim().length > 0
          ? renderCategoriesBySearch()
          : renderByCategories()}
      </div>
    </div>
  );
};

export default LibraryPage;
