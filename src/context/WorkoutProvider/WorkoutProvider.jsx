import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import firebase from "firebase/app";
import { firestore } from "../../firebase";
import { UserContext } from "../UserProvider/UserProvider";
import emptyWorkout from "../../Data/emptyWorkout/emptyWorkout";

export const WorkoutContext = createContext({});

const WorkoutProvider = (props) => {
  const { user } = useContext(UserContext);
  const [workoutData, setWorkoutData] = useState({});
  const workCollection = "WorkoutData";

  const getWorkoutData = useCallback(() => {
    firestore
      .collection(workCollection)
      .doc("WsybJoJaePYD3ld8sFaxEkZR3Rq1")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.exists) {
          const data = querySnapshot.data();
          setWorkoutData(data);
        } else {
          setWorkoutData(emptyWorkout);
        }
      });
  }, []);

  const updateTest = () => {
    firestore
      .collection(workCollection)
      .doc("WsybJoJaePYD3ld8sFaxEkZR3Rq1")
      .update({
        totalWorkouts: 31,
      });
  };

  const updateLastWorkout = (date, mins) => {
    firestore
      .collection(workCollection)
      .doc("WsybJoJaePYD3ld8sFaxEkZR3Rq1")
      .update({
        ...workoutData,
        totalDays: workoutData.totalDays++,
        lastWorkout: date,
        workoutArray: [
          ...workoutData.workoutArray,
          { dateCompleted: date, workoutsCompleted: 1 },
        ],
      });
  };

  useEffect(() => {
    if (user) {
      getWorkoutData();
    }
  }, [user, getWorkoutData]);

  const contextData = { workoutData, updateTest, updateLastWorkout };

  return (
    <WorkoutContext.Provider value={contextData}>
      {props.children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutProvider;
