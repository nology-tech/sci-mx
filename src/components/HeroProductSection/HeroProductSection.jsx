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
      <h1>Fuel your workout</h1>
      <div className={styles.carousel}>
        <BiLeftArrow className={styles.carousel__btn}>
          <button></button>
        </BiLeftArrow>
        <img className={styles.carousel__img} src={productImage} alt="" />
        <BiRightArrow className={styles.carousel__btn}>
          <button></button>
        </BiRightArrow>
      </div>
      <FaArrowAltCircleDown>
        <LinkScroll to="#"></LinkScroll>
      </FaArrowAltCircleDown>
    </section>
  );
};

export default HeroProductSection;
