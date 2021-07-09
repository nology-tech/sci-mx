import React from "react";
import styles from "./TrackerCarousel.module.scss";
import workoutData from "../../Data/workoutsCategoryData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Image1 from "../../assets/images/suggestedWorkout/suggestedWorkout1.png";

const responsive = {
  desktop2: {
    breakpoint: { max: 10000, min: 1201 },
    items: 6,
    slidesToSlide: 3,
  },
  desktop1: {
    breakpoint: { max: 1200, min: 769 },
    items: 6,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 574 },
    items: 5,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 573, min: 0 },
    items: 3,
    slidesToSlide: 1,
  },
};

const TrackerCarousel = () => {
  return (
    <div>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
      >
        {workoutData.legs.map((workout) => (
          <div className={styles.Carousel__container} key={workout.id}>
            <div className={styles.Carousel__overlay}></div>
            <img
              className={styles.Carousel__image}
              src={Image1}
              alt={workout.id}
            />
            <div className={styles.Carousel__buttons_container}>
              <Link to={`/workout/${workout.id}`}>
                <button className={styles.Carousel__button}>
                  {workout.title}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TrackerCarousel;
