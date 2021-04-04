import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEwEAIpOK_JT4dXkS9Z63v-cqRDv4l0VE",
  authDomain: "twitter-eeed3.firebaseapp.com",
  projectId: "twitter-eeed3",
  storageBucket: "twitter-eeed3.appspot.com",
  messagingSenderId: "373127946744",
  appId: "1:373127946744:web:400dea2f5546385db5360d"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();



