import React from "react";
import styles from "./HeroProductSection.module.scss";

import { Link as LinkScroll } from "react-scroll";
// import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import productData from "./data";
// import productImage from "../../assets/images/workout/workout-2-image.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1200, min: 668 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 573, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const HeroProductSection = () => {
  return (
    // <section id="product">
    <section className={styles.products}>
      <h1 className={styles.header}>Fuel your workout</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        // dotListClass="custom-dot-list-style"
        // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        // itemClass="carousel-item-padding-40-px"
      >
        {productData
          .sort((a, b) => 0.5 - Math.random())

          .map((product) => (
            <div className={styles.product} key={product.id}>
              <div className={styles.product__image}>
                <a href={product.link} target="_blank" rel="noreferrer">
                  <img
                    src={product.img_path}
                    alt={product.id}
                    className={styles.product__image_image}
                  />
                </a>
              </div>
              <div className={styles.product__description}>
                <p className={styles.product__description_name}>
                  {product.name}
                </p>
                <p className={styles.product__description_price}>
                  {" "}
                  from £{product.price}
                </p>
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
