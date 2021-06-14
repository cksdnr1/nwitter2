import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJdshHnGPjt9Y8jF7MRZysgaoCDXGcdaA",
  authDomain: "nwitter-68443.firebaseapp.com",
  projectId: "nwitter-68443",
  storageBucket: "nwitter-68443.appspot.com",
  messagingSenderId: "944941941847",
  appId: "1:944941941847:web:0696ccccf54dad358fcf12",
  measurementId: "G-JYNL30R02M"
};

export default firebase.initializeApp(firebaseConfig);
