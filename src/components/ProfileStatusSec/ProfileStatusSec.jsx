import React from "react";
import ProductPref from "../ProductPref";
import styles from "./ProfileStatusSec.module.scss";
import avatar from "../../assets/images/workout/workout-5-image.jpg";

const ProfileStatusSec = () => {
  return (
    <div className={styles.profile}>
      <img src={avatar} alt="sci-mx-logo.jpg" className={styles.profile__img} />
      <h2 className={styles.profile__heading}>Will Irving</h2>
      <div className={styles.profile__status}>
        <div className={styles.profile__stat}>
          <h6 className={styles.profile__stat__heading}>50</h6>
          <p className={styles.profile__stat__desc}>Workout days</p>
        </div>
        <div className={styles.profile__stat}>
          <h6 className={styles.profile__stat__heading}>2K</h6>
          <p className={styles.profile__stat__desc}>Workout Minutes</p>
        </div>
        <div className={styles.profile__stat}>
          <h6 className={styles.profile__stat__heading}>287</h6>
          <p className={styles.profile__stat__desc}>Total sessions</p>
        </div>
      </div>

      {/* ^^ TOP STATUS ^^ */}

      <div className={styles.preferences}>
        <h3 className={styles.preferences__heading}>Product Preferences</h3>
        <ProductPref />
        <ProductPref />
        <ProductPref />
      </div>
      <div className={styles.feedback}>
        <h4 className={styles.feedback__heading}>Feedback</h4>
        <p className={styles.feedback__desc}>Send us a message</p>
      </div>
    </div>
  );
};

export default ProfileStatusSec;
