import React from "react";
import navbar from "./image/navbar.svg";
import centerRectangle from "./image/centerRectangle.svg";
import polygon1 from "./image/polygon1.svg";
import polygon2 from "./image/polygon2.svg";
import smallIcon from "./image/small_Icons.svg";
import footerIcon from "./image/footer_image2.svg";
import timerIcon from "./image/timer_Icon.svg";
import runnerIcon from "./image/running_Icon.svg";
import graphIcon from "./image/graph_Icon.svg";
import healthIcon from "./image/health_Icon.svg";
import startWorkout1 from "./image/footerStartWorkout1.svg";
import startWorkout2 from "./image/footerStartWorkout2.svg";
import startWorkout3 from "./image/footerStartWorkout3.svg";
import styles from "./Tracker.module.scss";

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
      <div className={styles.center}>
        <img src={polygon1} className={styles.polygon} alt="" />
        <img src={centerRectangle} className={styles.centerRectangle} alt="" />
        <img src={polygon2} className={styles.polygon} alt="" />
      </div>

      {/* Lower Center */}
      <div className={styles.lower_center}>
        <a href="#">
          <img
            className={styles.lower_center__icon}
            src={timerIcon}
            alt="smallIcon"
          />
        </a>
        <a href="#">
          <img
            className={styles.lower_center__icon}
            src={runnerIcon}
            alt="smallIcon"
          />
        </a>
        <a href="#">
          <img
            className={styles.lower_center__icon}
            src={graphIcon}
            alt="smallIcon"
          />
        </a>
        <a href="#">
          <img
            className={styles.lower_center__icon}
            src={healthIcon}
            alt="smallIcon"
          />
        </a>
      </div>

      {/* Footer */}
      <div>
        <h4 className={styles.footer_title}>Suggested workouts</h4>
      </div>
      <div className={styles.footer_icons}>
        <a href="#">
          <img
            className={styles.footerIcon_StartWorkout__1}
            src={startWorkout2}
            alt="smallIcon"
          />
        </a>

        <a href="#">
          <img
            className={styles.footerIcon_StartWorkout__1}
            src={startWorkout2}
            alt="smallIcon"
          />
        </a>

        <a href="#">
          <img
            className={styles.footerIcon_StartWorkout__1}
            src={startWorkout2}
            alt="smallIcon"
          />
        </a>
      </div>
    </div>
  );
}

export default Tracker;
