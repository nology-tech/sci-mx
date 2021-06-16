import React from "react";
import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <h2 className={styles.form__heading}>Welcome,</h2>
        <h4 className={styles.form__subheading}>Let's create your account!</h4>
        <label className={styles.form__label} htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          className={styles.form__input}
          name="email"
          type="text"
          placeholder="email"
        />
        <label className={styles.form__label} htmlFor="password">
          Password:
        </label>
        <input
          id="password"
          className={styles.form__input}
          name="password"
          type="text"
          placeholder="password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
