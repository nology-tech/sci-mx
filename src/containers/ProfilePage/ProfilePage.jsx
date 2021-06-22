import React from "react";
import styles from "./ProfilePage.module.scss";
import ProfileStatusSec from "../../components/ProfileStatusSec";
const ProfilePage = () => {
  return (
    <section className={styles.container}>
      <ProfileStatusSec />
    </section>
  );
};

export default ProfilePage;
