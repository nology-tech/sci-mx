import React, { useState, useEffect } from "react";
import styles from "./LibraryPage.module.scss";
import WorkoutCard from "../../components/WorkoutCard";
import WorkoutCategories from "../../components/WorkoutCategories";
import { workoutsCategoryData } from "../../Data/workoutLibraryData";

const LibraryPage = () => {
  const [currentCategory, setCurrentCategory] = useState("legs");
  const [workoutsBySearch, setWorkoutsBySearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategory = (e) => {
    setCurrentCategory(e.target.textContent);
  };

  const handleSearchQuery = (e) => {
    setSearchTerm(e.target.value);
  };

  const renderByCategories = () => {
    return workoutsCategoryData[currentCategory].map((workout) => (
      <WorkoutCard key={workout.id} workout={workout} />
    ));
  };

  const renderWorkoutsBySearchTerm = () => {
    if (workoutsBySearch.length > 0) {
      return workoutsBySearch.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ));
    } else {
      return (
        <p className={styles.workouts__not_found}>Cannot find that work...</p>
      );
    }
  };

  const getWorkoutsBySearchTerm = () => {
    let workouts = [];
    for (const key in workoutsCategoryData) {
      workoutsCategoryData[key].forEach((workout) => {
        const exercises = workout["exercises"].join(" ").toUpperCase();
        const isTermInWorkout = exercises.includes(searchTerm.toUpperCase());

        if (isTermInWorkout) {
          workouts.push(workout);
        }
      });
    }
    console.log(workouts);
    setWorkoutsBySearch([...workouts]);
  };

  useEffect(() => {
    getWorkoutsBySearchTerm();
  }, [searchTerm]);

  return (
    <div className={styles.container}>
      <div className={styles.search_container}>
        <input
          type="text"
          placeholder="search for a workout..."
          value={searchTerm}
          onChange={handleSearchQuery}
          className={styles.search_container__search_input}
        />
      </div>

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
        {searchTerm.trim().length > 0
          ? renderWorkoutsBySearchTerm()
          : renderByCategories()}
      </div>
    </div>
  );
};

export default LibraryPage;
