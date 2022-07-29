import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRwudJvTuH8pNJsUx-mOTmDNh02c7DlFI",
  authDomain: "chat-demo-f9c23.firebaseapp.com",
  projectId: "chat-demo-f9c23",
  storageBucket: "chat-demo-f9c23.appspot.com",
  messagingSenderId: "80206756409",
  appId: "1:80206756409:web:5db0713437b67a6a9febe8",
  measurementId: "G-VB5GMNQWBK",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
