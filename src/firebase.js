// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm_u6VdAvyt4vZ7aqBSlrsg3V0PLqLytA",
  authDomain: "react-course-http-tutorial.firebaseapp.com",
  databaseURL: "https://react-course-http-tutorial-default-rtdb.firebaseio.com",
  projectId: "react-course-http-tutorial",
  storageBucket: "react-course-http-tutorial.appspot.com",
  messagingSenderId: "432979838391",
  appId: "1:432979838391:web:07339f4cfbffc914165432",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
