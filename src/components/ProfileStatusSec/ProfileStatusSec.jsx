import React from "react";
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

      <div className={styles.preferences}>
        <h3 className={styles.preferences__heading}>Product Prefrences</h3>

        <div className={styles.preferences__products}>
          <div className={styles.preferences__product}>
            <div className={styles.preferences__subheader}>
              <h4 className={styles.preferences__item}>Nutrition</h4>

              <button className={styles.preferences__button}>+</button>
            </div>

            <p className={styles.preferences__desc}>All products</p>
            {
              //-----------------------------------------------------
            }
          </div>
          <div className={styles.preferences__product}>
            <h4 className={styles.preferences__item}>Health & Wellbeing</h4>
          </div>
          {/* ----------------------------- */}
          <div>
            <h4 className={styles.preferences__item}>Clothing & Accessories</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatusSec;
