import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase-admin/app";

const firebaseConfig = {
  apiKey: "AIzaSyA34a_cwI6iVbMeHnJw7oiu9eaGADfvdh8",
  authDomain: "back-end1-fc9c3.firebaseapp.com",
  projectId: "back-end1-fc9c3",
  storageBucket: "back-end1-fc9c3.appspot.com",
  messagingSenderId: "120556955423",
  appId: "1:120556955423:web:77fc475ee34667e42bb22a",
  measurementId: "G-76M5B95ZN4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
