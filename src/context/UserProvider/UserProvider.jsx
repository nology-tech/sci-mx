import React, { createContext, useEffect, useState } from "react";
import firebase, { provider } from "../../firebase";
import styles from "./UserProvider.module.scss";

export const UserContext = createContext({});

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const contextData = {
    user,
    signIn,
    signOut,
  };

  return (
    <UserContext.Provider value={contextData}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
