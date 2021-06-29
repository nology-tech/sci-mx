import React from "react";
import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import styles from "./HeroSocials.module.scss";

const HeroSocials = () => {
  return (
    <section className={styles.socials}>
      <div id="socials" className={styles.productHeader}/>
      <h1 className={styles.socials__heading}>Share your progress</h1>
      <ul className={styles.socials__list}>
        <li className={styles.socials__item}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/scimx/"
            className={styles.socials__link}
          >
            <AiFillInstagram className={styles.socials__icon} />
          </a>
        </li>
        <li className={styles.socials__item}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/scimx/"
            className={styles.socials__link}
          >
            <FaTwitter className={styles.socials__icon} />
          </a>
        </li>
        <li className={styles.socials__item}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/officialscimx/"
            className={styles.socials__link}
          >
            <FaFacebook className={styles.socials__icon} />
          </a>
        </li>
        <li className={styles.socials__item}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/user/scimx/"
            className={styles.socials__link}
          >
            <FaYoutube
              className={`${styles.socials__icon} ${styles.socials__icon_youtube}`}
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default HeroSocials;
