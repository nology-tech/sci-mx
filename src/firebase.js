import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8VjHlqPdsVK66trHAsgBj-PnWlBS7Gt0",
  authDomain: "client-project-f60f4.firebaseapp.com",
  projectId: "client-project-f60f4",
  storageBucket: "client-project-f60f4.appspot.com",
  messagingSenderId: "56726129945",
  appId: "1:56726129945:web:5ab6332dc3285685f80988",
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

export default firebase;
