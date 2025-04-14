// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoeVMyyNbFTRGmGxkTDZC-n1xJxjWrGGo",
  authDomain: "rnt-lay.firebaseapp.com",
  projectId: "rnt-lay",
  storageBucket: "rnt-lay.appspot.com",
  messagingSenderId: "93884217637",
  appId: "1:93884217637:web:87356fafa23bb11cb842cc",
  measurementId: "G-JG3EBJ0VSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();