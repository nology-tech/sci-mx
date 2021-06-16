import React from "react";
import { Link as LinkRoute } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const Navbar = ({ handleSidebarToggle }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav__icon} onClick={handleSidebarToggle}>
          <FaBars />
        </div>
        <LinkRoute to="/home" className={styles.nav__logo}>
          SCIMAX
        </LinkRoute>
        <div className={styles.nav__profile}>
          <CgProfile />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
