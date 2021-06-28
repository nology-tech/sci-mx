import React from "react";
import navbar from "./image/navbar.svg";
// import centerRectangle from "./image/centerRectangle.svg";
// import polygon1 from "./image/polygon1.svg";
// import polygon2 from "./image/polygon2.svg";
import timerIcon from "./image/timer_Icon.svg";
import runnerIcon from "./image/running_Icon.svg";
import graphIcon from "./image/graph_Icon.svg";
import healthIcon from "./image/health_Icon.svg";
import startWorkout2 from "./image/footerStartWorkout2.svg";
import styles from "./Tracker.module.scss";
import Bar from "../../components/Graphs/Bar";
// import Line from "../../components/Graphs/Line";

function Tracker() {
  return (
    // Navbar
    <div>
      <nav>
        <img className={styles.navbar} src={navbar} alt="" />
      </nav>

      {/* Headings */}
      <div className={styles.headings}>
        <h3 className={styles.headings__name}>Tracker</h3>
        <h4 className={styles.workOutDays}>You worked out 5 times this week</h4>
      </div>

      {/* Upper Center */}
      <div className="bar-chart">
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
      <div>
        <h4 className={styles.footer_title}>Suggested workouts</h4>
      </div>
      <div className={styles.footer_icons}>
        <img
          className={styles.footerIcon_StartWorkout__1}
          src={startWorkout2}
          alt="smallIcon"
        />

        <img
          className={styles.footerIcon_StartWorkout__1}
          src={startWorkout2}
          alt="smallIcon"
        />

        <img
          className={styles.footerIcon_StartWorkout__1}
          src={startWorkout2}
          alt="smallIcon"
        />
      </div>
    </div>
  );
}

export default Tracker;
