import React from "react";
import styles from "./TrackerCarousel.module.scss";
import workoutData from "../../containers/Tracker/workoutData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const TrackerCarousel = () => {
  return (
    <div>
      <h1>Suggested Workout</h1>
      <Carousel
        swipeable={true}
        draggable={false}
        // showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autopPlay={true}
        // autoPlaySpeed={1000}
        // keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={500}
        // containerClass="Carousel__carouselContainer"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        <div className={styles.Carousel__carouselContainer}>
          {workoutData.map((workout) => (
            <div className={styles.Carousel__container} key={workout.id}>
              <img
                className={styles.Carousel__image}
                src={workout.img_path}
                alt={workout.id}
              />
              <div className={styles.Carousel__buttons}>
                <button className={styles.Carousel__button}>
                  {workout.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default TrackerCarousel;
