import React from "react";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <button className={styles.logInButton}>Log In</button>
    </div>
  );
};

export default LoginForm;
