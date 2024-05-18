// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6adcb.firebaseapp.com",
  projectId: "mern-estate-6adcb",
  storageBucket: "mern-estate-6adcb.appspot.com",
  messagingSenderId: "1074868063061",
  appId: "1:1074868063061:web:73c254aad1d861570ffddc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);