import React from "react";
import styles from "./TrackerCarousel.module.scss";
import workoutData from "../../containers/Tracker/workoutData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// const responsive = {
//   // superLargeDesktop: {
//   //   // the naming can be any, depends on you.
//   //   breakpoint: { max: 4000, min: 3000 },
//   //   items: 5,
//   // },
//   // desktop: {
//   //   breakpoint: { max: 3000, min: 1024 },
//   //   items: 3,
//   // },
//   // tablet: {
//   //   breakpoint: { max: 1024, min: 464 },
//   //   items: 2,
//   // },
//   // mobile: {
//   //   breakpoint: { max: 464, min: 0 },
//   //   items: 1,
//   // },
// };
const TrackerCarousel = () => {
  return (
    <div>
      <h1>Suggested Workout</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        // customDot={<CustomDot />}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
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
