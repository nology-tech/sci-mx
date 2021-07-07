import React, { useContext } from "react";
import ProductPref from "../ProductPref";
import styles from "./ProfileStatusSec.module.scss";
import avatar from "../../assets/images/workout/workout-5-image.jpg";
import mail from "../../assets/images/logos/mail.png";
import { UserContext } from "../../context/UserProvider/UserProvider";
import { WorkoutContext } from "../../context/WorkoutProvider/WorkoutProvider";
const ProfileStatusSec = () => {
  const userContext = useContext(UserContext);
  const workoutContext = useContext(WorkoutContext);


  const categories = [
    [
      { id: 0, name: "Protein Powder" },
      { id: 1, name: "Pre, Intra & Post-Workout" },
      { id: 2, name: "Food & Snacks" },
      { id: 3, name: "Amino Acids" },
      { id: 4, name: "Creatine" },
      { id: 5, name: "Weight Management" },
    ],
    [
      { id: 0, name: "Wellbeing" },
      { id: 1, name: "Growth & Repair" },
      { id: 2, name: "Hormone Support" },
      { id: 3, name: "Recovery" },
    ],
    [
      { id: 0, name: "Men's Clothing" },
      { id: 1, name: "Women's Clothing" },
      { id: 2, name: "Accessories" },
    ],
  ];

  return (
    <div className={styles.profile}>
      <img
        src={userContext.user ? userContext.user.photoURL : avatar}
        alt="sci-mx-logo.jpg"
        className={styles.profile__img}
      />
      <h2 className={styles.profile__heading}>
        {userContext.user ? userContext.user.displayName : ""}
      </h2>
      <div className={styles.profile__status}>
        <div className={styles.profile__stat}>
          <h6 className={styles.profile__stat__heading}>{workoutContext.workoutData.totalDays}</h6>
          <p className={styles.profile__stat__desc}>Workout days</p>
        </div>
        <div className={styles.profile__stat}>
          <h6 className={styles.profile__stat__heading}>{workoutContext.workoutData.workoutMinutes}</h6>
          <p className={styles.profile__stat__desc}>Workout Minutes</p>
        </div>
        <div className={styles.profile__stat}>
          <h6 className={styles.profile__stat__heading}>{workoutContext.workoutData.workoutMinutes}</h6>
          <p className={styles.profile__stat__desc}>Total sessions</p>
        </div>
      </div>

      {/* ^^ TOP STATUS ^^ */}

      <div className={styles.preferences}>
        <h3 className={styles.preferences__heading}>Product Preferences</h3>
        <ProductPref heading="Nutrition" categoryArray={categories[0]} />
        <ProductPref
          heading="Health & Wellbeing"
          categoryArray={categories[1]}
        />
        <ProductPref
          heading="Clothing & Accessories"
          categoryArray={categories[2]}
        />
      </div>
      <div className={styles.feedback}>
        <h4 className={styles.feedback__heading}>Feedback</h4>

        <a href="mailto:CUSTOMERSERVICES@SCI-MX.CO.UK">
          {" "}
          <img src={mail} className={styles.mailIcon} alt="mailicon" />
        </a>
      </div>
    </div>
  );
};

export default ProfileStatusSec;
