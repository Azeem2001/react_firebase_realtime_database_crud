import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCBHgjxTZ3qm80Zo1IpdRUlBx9INqwA-AQ",
  authDomain: "react-contact-86d95.firebaseapp.com",
  projectId: "react-contact-86d95",
  storageBucket: "react-contact-86d95.appspot.com",
  messagingSenderId: "728300482543",
  appId: "1:728300482543:web:f179b52dd2b47d0a05101a",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
