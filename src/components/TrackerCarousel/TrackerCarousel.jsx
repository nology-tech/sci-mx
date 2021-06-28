import React from "react";
import styles from "./TrackerCarousel.module.scss";
import workoutData from "../../containers/Tracker/workoutData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

const TrackerCarousel = () => {
  return (
    <div>
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
    </div>
  );
};

export default TrackerCarousel;
