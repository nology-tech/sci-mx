import React, { useState } from "react";
import styles from "./ProductPref.module.scss";
import rightArrow from "../../assets/images/logos/pref-right-arr.png";

const ProductPref = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { heading } = props;
  const handleToggler = () => {
    setIsOpen(!isOpen);
  };

  const applyExpand = isOpen && styles.preferences__content_active;
  const isIconDown = isOpen && styles.preferences__img_btn_active;
  return (
    <div onClick={handleToggler} className={styles.preferences}>
      <div className={styles.preferences__header}>
        <h4 className={styles.preferences__heading}>{heading}</h4>
        <button className={styles.preferences__btn}>
          <img
            className={`${styles.preferences__img_btn} ${isIconDown}`}
            src={rightArrow}
            alt="expand"
          />
        </button>
      </div>
      <div className={`${styles.preferences__content} ${applyExpand}`}>
        <p className={styles.preferences__subheading}>All Products</p>
        <p className={styles.preferences__link}>Protein powder</p>
        <p className={styles.preferences__link}>Food & snack</p>
        <p className={styles.preferences__link}>Amino acids</p>
      </div>
    </div>
  );
};

export default ProductPref;
