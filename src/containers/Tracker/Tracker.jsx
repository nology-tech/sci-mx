import React from "react";

import centerRectangle from "./image/centerRectangle.svg";
import polygon1 from "./image/polygon1.svg";
import polygon2 from "./image/polygon2.svg";
import timerIcon from "./image/timer_Icon.svg";
import runnerIcon from "./image/running_Icon.svg";
import graphIcon from "./image/graph_Icon.svg";
import healthIcon from "./image/health_Icon.svg";

import styles from "./Tracker.module.scss";
import TrackerCarousel from "../../components/TrackerCarousel/TrackerCarousel";

function Tracker() {
  return (
    // Navbar
    <div>
      {/* Headings */}
      <div className={styles.headings}>
        <h3 className={styles.headings__name}>Tracker</h3>
        <h4 className={styles.workOutDays}>You worked out 5 times this week</h4>
      </div>

      {/* Upper Center */}
      <div className={styles.center}>
        <img src={polygon1} className={styles.polygon} alt="" />
        <img src={centerRectangle} className={styles.centerRectangle} alt="" />
        <img src={polygon2} className={styles.polygon} alt="" />
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

      <div>
        <TrackerCarousel />
      </div>
    </div>
  );
}

export default Tracker;
