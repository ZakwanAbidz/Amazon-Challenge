// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyC7zenuC8nFqttXZ1gPEBhHNlaunpmAMDs",
    authDomain: "clone-fa5ef.firebaseapp.com",
    projectId: "clone-fa5ef",
    storageBucket: "clone-fa5ef.appspot.com",
    messagingSenderId: "474104968823",
    appId: "1:474104968823:web:83f59552d0a9981c1b3872",
    measurementId: "G-MYCMRQQ8Y8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };