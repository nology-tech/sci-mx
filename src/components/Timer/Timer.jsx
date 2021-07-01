import React, { useState, useEffect } from "react";
import styles from "./Timer.module.scss";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [rounds, setRounds] = useState([]);
  const TIME_LIMIT = 60;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  const FULL_DASH_ARRAY = 283;

  const calculateTimeFraction = () => {
    return timeLeft / TIME_LIMIT;
  };

  const setCircleDashArray = () => {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  };

  // const lapsContainer = document.querySelector(".lapContainer");
  useEffect(() => {
    let interval = null;

    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start]);

  let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  let seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);

  return (
    <section className={styles.timer}>
      <div className={styles.clockcontainer}>
        <div className={styles.time}>
          <div className={styles.basetimer}>
            <svg
              className={styles.basetimer__svg}
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <svg viewBox="0 0 10 10" x="200" width="100"> */}
              <g className={styles.basetimercircle}>
                <circle
                  className={styles.basetimerpathelapsed}
                  cx="50"
                  cy="50"
                  r="45"
                />
                <path
                  id="base-timer-path-remaining"
                  stroke-dasharray="283"
                  className={styles.basetimer__pathremaining}
                  d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
                >
                  <animateMotion
                    // path="M0,0 l300,0"
                    // begin="0s"
                    // dur="5s"
                    // repeatCount="1"
                    dur="6s"
                    repeatCount="indefinite"
                    rotate="auto-reverse"
                  />
                </path>
              </g>
            </svg>
            <span className={styles.basetimerlabel}>
              {minutes}:{seconds}
            </span>
            {/* </svg> */}
          </div>
          {/* {minutes}:{seconds} */}
        </div>

        <button
          onClick={() => {
            setTime(0);
            setStart(true);
          }}
        >
          RESET
        </button>
        <button
          onClick={() => {
            setStart(true);
          }}
        >
          START
        </button>
        <button
          onClick={() => {
            setStart(false);
            const newState = [
              ...rounds,
              { mins: minutes, secs: seconds, round: rounds.length + 1 },
            ];
            setRounds(newState);
            console.log(rounds);
            setCircleDashArray();
          }}
        >
          STOP
        </button>
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
