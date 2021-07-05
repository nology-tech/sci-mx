import React, { useContext } from "react";
import ProductPref from "../ProductPref";
import styles from "./ProfileStatusSec.module.scss";
import avatar from "../../assets/images/workout/workout-5-image.jpg";
import mail from "../../assets/images/logos/mail.png";
import { UserContext } from "../../context/UserProvider/UserProvider";

const ProfileStatusSec = () => {
  const userContext = useContext(UserContext);

  const categories = [["Protein Powder", "Pre, Intra & Post-Workout","Food & Snacks", "Amino Acids", "Creatine", "Weight Management"],["Wellbeing", "Growth & Repair", "Hormone Support", "Recovery"],["Men's Clothing", "Women's Clothing", "Accessories"]]

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
        <ProductPref heading="Nutrition" categoryArray={categories[0]}/>
        <ProductPref heading="Health & Wellbeing" categoryArray={categories[1]}/>
        <ProductPref heading="Clothing & Accessories" categoryArray={categories[2]}/>
      </div>
      <div className={styles.feedback}>
        <h4 className={styles.feedback__heading}>Feedback</h4>
        <p className={styles.feedback__desc}>Send us a message<a href="mailto:CUSTOMERSERVICES@SCI-MX.CO.UK"><img src={mail} className={styles.mailIcon} alt="mailicon"></img></a></p>
      </div>
    </div>
  );
};

export default ProfileStatusSec;
