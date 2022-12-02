// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvA5rBg5irsTsRefxxmXcKAufR9jvKNSw",
  authDomain: "tesla-clone-b04a1.firebaseapp.com",
  projectId: "tesla-clone-b04a1",
  storageBucket: "tesla-clone-b04a1.appspot.com",
  messagingSenderId: "338270758525",
  appId: "1:338270758525:web:b2e1f920c88a297ae4f314",
  measurementId: "G-0R7C2F11KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);