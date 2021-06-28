import React from "react";
import styles from "./HeroProductSection.module.scss";

import { Link as LinkScroll } from "react-scroll";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import productData from "./data";
// import productImage from "../../assets/images/workout/workout-2-image.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 1200, min: 769 },
    items: 6,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 768, min: 574 },
    items: 5,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 573, min: 0 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const HeroProductSection = () => {
  return (
    <section id="product" className={styles.products}>
      {/* <h1 className={styles.products__title}>Fuel your workout</h1>
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
      </div> */}
      <Carousel
        swipeable={true}
        draggable={true}
        // showDots={true}
        responsive={responsive}
        infinite={true}
        className="styles.Carousel__carouselContainer"
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        // dotListClass="custom-dot-list-style"
        // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        // itemClass="carousel-item-padding-40-px"
      >
        {workoutData.map((workout) => (
          <div className={styles.Carousel__container} key={workout.id}>
            <div className={styles.Carousel__overlay}></div>
            <img
              className={styles.Carousel__image}
              src={workout.img_path}
              alt={workout.id}
            />
            <div className={styles.Carousel__buttons_container}>
              <button className={styles.Carousel__button}>
                {workout.name}
              </button>
            </div>
          </div>
        ))}
      </Carousel>
      <LinkScroll className={styles.hero__arrow_btn} to="#">
        <FaArrowAltCircleDown
          className={styles.carousel__arrow_btn}
        ></FaArrowAltCircleDown>
      </LinkScroll>
    </section>
  );
};

export default HeroProductSection;
