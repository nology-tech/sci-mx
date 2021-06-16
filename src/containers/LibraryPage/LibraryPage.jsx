import React from "react";
import styles from "./LibraryPage.module.scss";

const LibraryPage = () => {
  return (
    <div className={styles.container}>
      <input className={styles.searchBar} type="text" placeholder="SEARCH..." />
    </div>
  );
};

export default LibraryPage;
