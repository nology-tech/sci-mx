import React, { useContext } from "react";
import { Link as LinkRoute } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styles from "./Sidebar.module.scss";
import { UserContext } from "../../context/UserProvider/UserProvider";

const Sidebar = (props) => {
  const userContext = useContext(UserContext);
  const { isSidebarOpen, handleSidebarToggle } = props;
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
            to="/tracker"
            className={styles.sidebar__link}
            onClick={handleSidebarToggle}
          >
            Tracker
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
        <li className={styles.sidebar__item}>
          <button
            onClick={userContext.signOut}
            className={styles.sidebar__signOut}
          >
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
