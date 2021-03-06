import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { WorkoutContext } from "../../context/WorkoutProvider/WorkoutProvider";

const LineChart = () => {
  const workoutContext = useContext(WorkoutContext);

  const data = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: "Your weekly number of Workouts",
        data: workoutContext.weeksGraphData,

        backgroundColor: "rgb(0, 38, 62)",
        borderColor: "rgb(240, 82, 36)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
