import React, { createContext, useEffect, useState } from "react";
import { firestore } from "../../firebase";

export const WorkoutContext = createContext({});

const WorkoutProvider = props => {
  const [workOutData, setWorkOutData] = useState({});

  const getWorkoutData = () => {
    firestore
      .collection("WorkoutData")
      .doc("WsybJoJaePYD3ld8sFaxEkZR3Rq1")
      .get()
      .then(querySnapshot => console.log(querySnapshot));
  };

  const contextData = { getWorkoutData };

  return <WorkoutContext.Provider value={contextData}>{props.children}</WorkoutContext.Provider>;
};

export default WorkoutProvider;
