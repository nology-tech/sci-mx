import React from "react";
import { Link as LinkRoute } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styles from "./Sidebar.module.scss";

const Sidebar = ({ isSidebarOpen, handleSidebarToggle }) => {
  return (
    <div
      className={`${styles.sidebar} ${isSidebarOpen && styles.sidebar_open}`}
    >
      <div className={styles.sidebar__icon} onClick={handleSidebarToggle}>
        <FaTimes />
      </div>
      <ul className={styles.sidebar__list}>
        <li className={styles.sidebar__item}>
          <LinkRoute
            to="/workout"
            className={styles.sidebar__link}
            onClick={handleSidebarToggle}
          >
            Workout
          </LinkRoute>
        </li>
        <li className={styles.sidebar__item}>
          <LinkRoute
            to="/library"
            className={styles.sidebar__link}
            onClick={handleSidebarToggle}
          >
            Library
          </LinkRoute>
        </li>
        <li className={styles.sidebar__item}>
          <a
            href="https://sci-mx.co.uk/"
            target="_blank"
            rel="noreferrer"
            className={styles.sidebar__link}
            onClick={handleSidebarToggle}
          >
            Shop
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
