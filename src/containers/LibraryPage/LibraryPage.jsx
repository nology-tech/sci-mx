import React, { useState, useEffect } from "react";
import styles from "./LibraryPage.module.scss";
import WorkoutCard from "../../components/WorkoutCard";
import WorkoutCategories from "../../components/WorkoutCategories";
import { workoutsCategoryData } from "../../Data/workoutLibraryData";

const LibraryPage = () => {
  const [currentCategory, setCurrentCategory] = useState("legs");
  const [searchWorkout, setSearchWorkout] = useState("");

  const handleCategory = e => {
    console.log(e.target.textContent);
    setCurrentCategory(e.target.textContent);
  };

  const renderByCategories = () => {
    return workoutsCategoryData[currentCategory].map((workout, i) => <WorkoutCard key={i} workout={workout} />);
  };

  const renderCategoriesBySearch = workouts => {
    return workouts.map((workout, i) => <WorkoutCard key={i} workout={workout} />);
  };

  const handleSearchQuery = e => {
    setSearchWorkout(e.target.value);

    let array = []
    for (const key in workoutsCategoryData) {
      const filteredWorkouts = workoutsCategoryData[key].filter(workout => {
        const bool = workout["exercises"].some(exercise => {
          return exercise.includes(e.target.value);
        });
        return bool;
      });

      if(filteredWorkouts.length > 0){
        array = [...array, ...filteredWorkouts];
      }
    }
    return renderCategoriesBySearch(array);
  };

  return (
    <div className={styles.container}>
      <input type="text" placeholder="search workout" onChange={handleSearchQuery} />

      <div className={styles.categories}>
        <ul className={styles.categories__lists}>
          {Object.keys(workoutsCategoryData).map(category => (
            <WorkoutCategories key={category} handleCategory={handleCategory} category={category} />
          ))}
        </ul>
      </div>

      <div className={styles.workouts}>
        {searchWorkout.trim().length > 0 ? handleSearchQuery() : renderByCategories()}
      </div>
    </div>
  );
};

export default LibraryPage;
