import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { WorkoutContext } from "../../context/WorkoutProvider/WorkoutProvider";
const DoughnutChart = () => {
  const workoutContext = useContext(WorkoutContext);
  const data = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Your weekly number of Workouts",
        data: [
          workoutContext.workoutData.workoutArray[0].workoutsCompleted,
          workoutContext.workoutData.workoutArray[1].workoutsCompleted,
          workoutContext.workoutData.workoutArray[2].workoutsCompleted,
          workoutContext.workoutData.workoutArray[3].workoutsCompleted,
          workoutContext.workoutData.workoutArray[4].workoutsCompleted,
          workoutContext.workoutData.workoutArray[5].workoutsCompleted,
          workoutContext.workoutData.workoutArray[6].workoutsCompleted,
        ],
        borderColor: [
          "rgba(240, 82, 36, 0.2)",
          "rgba(0, 38, 62, 0.2)",
          "rgba(167, 169, 172, 0.2)",
          "rgba(240, 82, 36, 0.2)",
          "rgba(0, 38, 62, 0.2)",
          "rgba(167, 169, 172, 0.2)",
          "rgba(240, 82, 36, 0.2)",
        ],
        backgroundColor: [
          "rgb(240, 82, 36)",
          "rgb(0, 38, 62)",
          "rgb(167, 169, 172)",
          "rgb(240, 82, 36)",
          "rgb(0, 38, 62)",
          "rgb(167, 169, 172",
          "rgb(240, 82, 36",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Doughnut data={data} />
    </>
  );
};
export default DoughnutChart;
