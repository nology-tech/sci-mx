import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { UserContext } from "../UserProvider/UserProvider";
import emptyWorkout from "../../Data/emptyWorkout/emptyWorkout";

export const WorkoutContext = createContext({});

const WorkoutProvider = props => {
  const { user } = useContext(UserContext);
  const [workoutData, setWorkoutData] = useState({});
  const workCollection = "WorkoutData";

  const getWorkoutData = useCallback(() => {
    firestore
      .collection(workCollection)
      .doc("WsybJoJaePYD3ld8sFaxEkZR3Rq1")
      .get()
      .then(querySnapshot => {
        if (querySnapshot.exists) {
          const data = querySnapshot.data();
          setWorkoutData(data);
        } else {
          setWorkoutData(emptyWorkout);
        }
      });
  }, []);

  useEffect(() => {
    if (user) {
      getWorkoutData();
    }
  }, [user, getWorkoutData]);

  const isDateInCurrentWeek = date => {
    const todayDateObject = new Date();
    const getDate = new Date().getDate();
    const getDay = new Date().getDay();

    const firstDayOfWeek = new Date(todayDateObject.setDate(getDate - getDay));
    const lastDayOfWeek = new Date(firstDayOfWeek);

    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

    return date >= firstDayOfWeek && date <= lastDayOfWeek;
  };

  const getDayOfWeek = index => ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"][index];

  const weeksWorkouts = workoutData.workoutArray?.reduce(
    (weekWorkouts, workOut) => {
      const { dateCompleted, workoutsCompleted } = workOut;
      const workoutDate = dateCompleted.toDate();

      if (!isDateInCurrentWeek(workoutDate)) {
        return weekWorkouts;
      }

      const day = getDayOfWeek(workoutDate.getDay());

      weekWorkouts[day] = workoutsCompleted;

      return weekWorkouts;
    },
    { sunday: 0, monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0 }
  );

  const weeksGraphData = [
    weeksWorkouts?.sunday,
    weeksWorkouts?.monday,
    weeksWorkouts?.tuesday,
    weeksWorkouts?.wednesday,
    weeksWorkouts?.thursday,
    weeksWorkouts?.friday,
    weeksWorkouts?.saturday,
  ];

  const weeksWorkoutsTotal = weeksGraphData.reduce((total, current) => total + current, 0);

  const contextData = { workoutData, weeksGraphData, weeksWorkoutsTotal };

  return <WorkoutContext.Provider value={contextData}>{props.children}</WorkoutContext.Provider>;
};

export default WorkoutProvider;
