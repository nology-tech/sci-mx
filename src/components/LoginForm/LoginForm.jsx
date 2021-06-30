import React, { useContext, useEffect } from "react";
import styles from "./LoginForm.module.scss";
import { UserContext } from "../../context/UserProvider/UserProvider";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const userContext = useContext(UserContext);

  let history = useHistory();

  useEffect(() => {
    if (userContext.user) {
      history.push("/home");
    }
  }, [userContext]);
  return (
    <div className={styles.container}>
      <button onClick={userContext.signIn} className={styles.logInButton}>
        Log In
      </button>
    </div>
  );
};

export default LoginForm;
