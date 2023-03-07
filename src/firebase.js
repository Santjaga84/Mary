// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC31PxRunxGGEw3GcB_af9pC1W1Q-9QDe8",
  authDomain: "project-hotel-d3939.firebaseapp.com",
  databaseURL: "https://project-hotel-d3939-default-rtdb.firebaseio.com",
  projectId: "project-hotel-d3939",
  storageBucket: "project-hotel-d3939.appspot.com",
  messagingSenderId: "1085038131589",
  appId: "1:1085038131589:web:97d5fb26b11b3e74a46cec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app
export const db = getFirestore(app); 