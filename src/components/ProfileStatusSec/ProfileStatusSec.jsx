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
        <p></p>
      </div>
    </>
  );
};

export default ProfileStatusSec;
