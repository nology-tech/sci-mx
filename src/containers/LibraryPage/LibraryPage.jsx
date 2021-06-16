import React from "react";
import styles from "./LibraryPage.module.scss";

const LibraryPage = () => {
  return (
    <div className={styles.container}>
      <input className={styles.searchBar} type="text" placeholder="SEARCH..." />

      <div className={styles.buttoncontainer}>
        <button className={styles.button}>LEGS</button>
        <button className={styles.button}>ARMS</button>
        <button className={styles.button}>CHEST</button>
        <button className={styles.button}>CARDIO</button>
      </div>
    </div>
  );
};

export default LibraryPage;
