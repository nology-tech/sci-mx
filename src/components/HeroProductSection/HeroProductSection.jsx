import React from "react";
import styles from "./HeroProductSection.module.scss";

const HeroProductSection = () => {
  return (
    <section id="product" className={styles.products}>
      <h1>Fuel your workout</h1>
      <div className="carousel">
        <button>
          <img />
        </button>
        <img />
        <button>
          <img />
        </button>
      </div>
      <button>
        <img />
      </button>
    </section>
  );
};

export default HeroProductSection;
