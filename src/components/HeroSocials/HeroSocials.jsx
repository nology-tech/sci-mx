import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import styles from "./HeroSocials.module.scss";

const HeroSocials = () => {
  return (
    <section className={styles.socials}>
      <h1 className={styles.socials__heading}>Share your progress</h1>
      <ul className={styles.socials__list}>
        <li className={styles.socials__item}>
          <AiFillInstagram className={styles.socials__icon}>
            <Link to="/shop" className={styles.socials__link} />
          </AiFillInstagram>
        </li>
        <li className={styles.socials__item}>
          <FaTwitter className={styles.socials__icon}>
            <Link to="/shop" className={styles.socials__link} />
          </FaTwitter>
        </li>
        <li className={styles.socials__item}>
          <FaFacebook className={styles.socials__icon}>
            <Link to="/shop" className={styles.socials__link} />
          </FaFacebook>
        </li>
        <li className={styles.socials__item}>
          <FaYoutube
            className={`${styles.socials__icon} ${styles.socials__icon_youtube}`}
          >
            <Link to="/shop" className={styles.socials__link} />
          </FaYoutube>
        </li>
      </ul>
    </section>
  );
};

export default HeroSocials;
