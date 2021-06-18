import React from "react";
import styles from "./HeroProductSection.module.scss";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { FaArrowAltCircleDown } from "react-icons/fa";
import productImage from "../../assets/images/workout/workout-2-image.jpg";

const HeroProductSection = () => {
  return (
    <section id="product" className={styles.products}>
      <h1 className={styles.products__title}>Fuel your workout</h1>
      <div className={styles.carousel}>
        <BiLeftArrow
          className={`${styles.carousel__btn} ${styles.carousel__btn_left}`}
        >
          <button></button>
        </BiLeftArrow>
        <img className={styles.carousel__img} src={productImage} alt="" />
        <BiRightArrow
          className={`${styles.carousel__btn} ${styles.carousel__btn_right}`}
        >
          <button></button>
        </BiRightArrow>
        <div className={styles.carousel__text}>
          <p className={styles.carousel__title}>Daily Mood</p>
          <p className={styles.carousel__price}>£24.99 RRP</p>
        </div>
      </div>
      <LinkScroll className={styles.hero__arrow_btn} to="#">
        <FaArrowAltCircleDown
          className={styles.carousel__arrow_btn}
        ></FaArrowAltCircleDown>
      </LinkScroll>
    </section>
  );
};

export default HeroProductSection;
