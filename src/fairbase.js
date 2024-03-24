// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz3HDA6W-MLECq4xgBeI6dEXEiEVQtuO8",
  authDomain: "movie-120ef.firebaseapp.com",
  projectId: "movie-120ef",
  storageBucket: "movie-120ef.appspot.com",
  messagingSenderId: "242315747720",
  appId: "1:242315747720:web:022d6f7f13242aba86da3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();
export const auth = getAuth(app)