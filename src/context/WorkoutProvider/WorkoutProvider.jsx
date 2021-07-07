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
  }, [user]);

  useEffect(() => {
    if (user) {
      getWorkoutData();
    }
  }, [user, getWorkoutData]);

  const contextData = { workoutData };

  return <WorkoutContext.Provider value={contextData}>{props.children}</WorkoutContext.Provider>;
};

export default WorkoutProvider;
