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
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
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
