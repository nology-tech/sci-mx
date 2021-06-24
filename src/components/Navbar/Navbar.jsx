import React from "react";
import { Link as LinkRoute } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import logo from "../../assets/images/logos/sci-mx_brand_logo_blue.png";

const Navbar = (props) => {
  const { handleSidebarToggle } = props;
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div onClick={handleSidebarToggle}>
          <FaBars className={styles.nav__icon}></FaBars>
        </div>
        <LinkRoute className={styles.nav__logo} to="/home">
          <img className={styles.nav__logo_img} src={logo} alt="" />
        </LinkRoute>
        <LinkRoute to="/profile" className={styles.nav__profile}>
          <CgProfile />
        </LinkRoute>
      </nav>
    </header>
  );
};

export default Navbar;
