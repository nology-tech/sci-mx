import React from "react";
import LoginForm from "../../components/LoginForm";
import styles from "./Login.module.scss";
import Logo from "../../assets/images/logos/sci-mx_brand_logo_white.png"

const Login = () => {
  return (
    <>
    <div className={styles.pageContainer}>
      <img src={Logo}></img>
      <LoginForm/>
    </div>
    </>
  );
};

export default Login;
