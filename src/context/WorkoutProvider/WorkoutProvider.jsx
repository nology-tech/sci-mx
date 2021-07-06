import React, { createContext, useContext, useEffect, useState } from "react";
import { firestore } from "../../firebase";
import workoutData from "../../Data/workoutData/workoutData";
import { UserContext } from "../UserProvider/UserProvider";

export const WorkoutContext = createContext({});

const WorkoutProvider = props => {
  const { user } = useContext(UserContext);
  const [workOutData, setWorkOutData] = useState({});
  const WorkoutCollection = "WorkoutData";

  const getWorkoutData = () => {
    firestore
      .collection(WorkoutCollection)
      .doc(user.uid)
      .get()
      .then(querySnapshot => {
        if (querySnapshot.exists) {
          const data = querySnapshot.data();
          setWorkOutData(data);
        } else {
          setWorkOutData(workoutData);
        }
      });
  };

  useEffect(() => {
    if (user) {
      getWorkoutData();
    }
  }, [user]);

  const setWorkoutData = workOutObject => {
    firestore.collection(WorkoutCollection).doc(user.uid).set(workOutObject);
  };

  const contextData = { workOutData, setWorkOutData };

  return <WorkoutContext.Provider value={contextData}>{props.children}</WorkoutContext.Provider>;
};

export default WorkoutProvider;
