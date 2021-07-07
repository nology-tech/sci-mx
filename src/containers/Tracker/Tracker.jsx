import React, { useContext } from "react";
import timerIcon from "./image/timer_Icon.svg";
import runnerIcon from "./image/running_Icon.svg";
import graphIcon from "./image/graph_Icon.svg";
import healthIcon from "./image/health_Icon.svg";
import styles from "./Tracker.module.scss";
import TrackerCarousel from "../../components/TrackerCarousel/TrackerCarousel";
import Line from "../../components/Graphs/Line";
import Bar from "../../components/Graphs/Bar";
import PolarArea from "../../components/Graphs/Polar";
import { WorkoutContext } from "../../context/WorkoutProvider/WorkoutProvider";
import DoughnutChart from "../../components/Graphs/Doughnut";

function Tracker() {
  const workoutContext = useContext(WorkoutContext);
  return (
    // Navbar
    <div className={styles.trackerPage}>
      {/* Headings */}
      <div className={styles.headings}>
        <h3 className={styles.headings__name}>Tracker</h3>
        <h4 className={styles.workOutDays}>
          You worked out {workoutContext.workoutData.totalWorkouts} times this
          week
        </h4>
      </div>

      {/* Upper Center */}
      <div className={styles.center}>
        <div className={styles.chart}>
          {/* <Bar /> */}
          {/* <DoughnutChart /> */}
          {/* <Line /> */}
          <PolarArea />
        </div>
      </div>

      {/* Lower Center */}
      <div className={styles.lower_center}>
        <img
          className={styles.lower_center__icon}
          src={timerIcon}
          alt="smallIcon"
        />

        <img
          className={styles.lower_center__icon}
          src={runnerIcon}
          alt="smallIcon"
        />

        <img
          className={styles.lower_center__icon}
          src={graphIcon}
          alt="smallIcon"
        />

        <img
          className={styles.lower_center__icon}
          src={healthIcon}
          alt="smallIcon"
        />
      </div>

      {/* Footer */}

      <h1 className={styles.headings__carousel}>SUGGESTED WORKOUT</h1>

      <TrackerCarousel />
    </div>
  );
}

export default Tracker;
