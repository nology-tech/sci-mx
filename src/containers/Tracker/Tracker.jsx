import React from "react";
import timerIcon from "./image/timer_Icon.svg";
import runnerIcon from "./image/running_Icon.svg";
import graphIcon from "./image/graph_Icon.svg";
import healthIcon from "./image/health_Icon.svg";
import styles from "./Tracker.module.scss";
import TrackerCarousel from "../../components/TrackerCarousel/TrackerCarousel";
import Bar from "../../components/Graphs/Bar";

function Tracker() {
  return (
    // Navbar
    <div className={styles.trackerPage}>
      {/* Headings */}
      <div className={styles.headings}>
        <h3 className={styles.headings__name}>Tracker</h3>
        <h4 className={styles.workOutDays}>You worked out 5 times this week</h4>
      </div>

      {/* Upper Center */}

      <div className={styles.barchart}>
        <Bar />
        {/* <Line /> */}
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
