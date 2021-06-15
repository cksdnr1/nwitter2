import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJdshHnGPjt9Y8jF7MRZysgaoCDXGcdaA",
    authDomain: "nwitter-68443.firebaseapp.com",
    projectId: "nwitter-68443",
    storageBucket: "nwitter-68443.appspot.com",
    messagingSenderId: "944941941847",
    appId: "1:944941941847:web:46e2fde3f1a340b78fcf12",
    measurementId: "G-MNKNFYV0FV"
  };

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth()
