import React, { createContext, useEffect, useState } from "react";
import firebase, { provider } from "../../firebase";

export const UserContext = createContext({});

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const signIn = () => {
    firebase.auth().signInWithRedirect(provider);
    setIsLogged(true);
    setIsLoading(false);
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setIsLogged(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // console.log(user.uid);
        setUser(user);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });

    return unsubscribe; //componentwillunmount
  }, []);

  const contextData = {
    user,
    signIn,
    signOut,
    logStatus: isLogged,
  };

  return (
    <UserContext.Provider value={contextData}>
      {!isLoading && props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;

// const getUser = () => {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       setUser(user);
//     } else {
//       setUser(null);
//     }
//   });
// };
