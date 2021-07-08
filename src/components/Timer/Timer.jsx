import React, { useState, useEffect, useContext } from "react";
import { WorkoutContext } from "../../context/WorkoutProvider/WorkoutProvider";
import styles from "./Timer.module.scss";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [hasTimerStarted, setHasTimerStarted] = useState(false);
  const [rounds, setRounds] = useState([]);
  const { workoutData, updateLastWorkout } = useContext(WorkoutContext);

  let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  let seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  let waitingClick = null;
  let lastClick = 0;

  const checkDatesAreOnSameDay = (dbDate, currDate) =>
    dbDate.getFullYear() === currDate.getFullYear() &&
    dbDate.getMonth() === currDate.getMonth() &&
    dbDate.getDate() === currDate.getDate();

  useEffect(() => {
    let interval = null;
    if (hasTimerStarted) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [hasTimerStarted]);

  const handleTimerStart = () => {
    if (!hasTimerStarted) {
      setHasTimerStarted(true);
    }
  };
  const handleTimerStop = () => {
    if (hasTimerStarted) {
      const dbDate = new Date(workoutData.lastWorkout.seconds);
      const isSameDate = checkDatesAreOnSameDay(dbDate, new Date());

      if (!isSameDate) {
        console.log("updating db with new date...");
        updateLastWorkout(new Date(), null);
      }

      setHasTimerStarted(false);

      const newState = [
        ...rounds,
        { mins: minutes, secs: seconds, round: rounds.length + 1 },
      ];

      setTime(0);
      setRounds(newState);
      console.log(rounds);
    }
  };

  const handleTimerReset = () => {
    setTime(0);
    setHasTimerStarted(true);
  };

  return (
    <section className={styles.timer}>
      <div className={styles.parentcontainer}>
        <div
          onClick={(e) => {
            if (lastClick && e.timeStamp < 250 && waitingClick) {
              lastClick = 0;
              clearTimeout(waitingClick);
              console.log("Do the steps to respond double click");
              handleTimerStart();
            } else {
              lastClick = e.timeStamp;
              waitingClick = setTimeout(() => {
                waitingClick = null;
                console.log("Do the steps to respond single click");
                handleTimerStart();
                handleTimerStop();
              }, 251);
            }
          }}
          className={styles.clockcontainer}
        >
          <div className={styles.time}>
            <div className={styles.basetimer}>
              <svg className={styles.clockface} height="110" width="110">
                <circle
                  stroke="#FFFFFF"
                  strokeWidth="10"
                  r="50"
                  cx="55"
                  cy="55"
                />
                <circle
                  stroke={seconds >= 50 ? "red" : "#00263E"}
                  strokeDashoffset={
                    -((seconds / 60) * 50 * 2 * Math.PI) + 50 * 2 * Math.PI
                  }
                  strokeDasharray={50 * 2 * Math.PI}
                  strokeWidth="5"
                  fill="#F05224"
                  r="50"
                  cx="55"
                  cy="55"
                />
              </svg>
              <span className={styles.basetimerlabel}>
                {minutes}:{seconds}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.buttoncontainer}>
          <button onClick={handleTimerReset}>RESET</button>
        </div>
      </div>
      <div className={styles.roundcontainer}>
        {rounds.map((round, index) => (
          <div className={styles.laps} key={index++}>
            <p>Round {round.round}: </p>
            <p>
              {round.mins}: {round.secs}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Timer;
