import React from "react";
import styles from "./ProfileStatusSec.module.scss";
import Avatar from "../../assets/images/logos/sci-mx-logo.jpg";

const ProfileStatusSec = () => {
  return (
    <>
      <img src={Avatar} alt="sci-mx-logo.jpg" />
      <h2>Will Irving</h2>
      <div>
        <h6>50</h6>
        <p>Workout days</p>
      </div>
      <div>
        <h6>2K</h6>
        <p>Workout Minutes</p>
      </div>
      <div>
        <h6>287</h6>
        <p>Total sessions</p>
      </div>
    </>
  );
};

export default ProfileStatusSec;
