import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Your weekly number of Workouts",
      data: [22, 19, 3, 5, 2, 3, 6],
      fill: false,
      backgroundColor: "#f05224",
      borderColor: "#00263e",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <div className="header">
      <h1 className="title">Line Chart</h1>
      <div className="links">
        <a
          className="btn btn-gh"
          href="https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js"
        >
          Github Source
        </a>
      </div>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
