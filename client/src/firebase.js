// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-58e28.firebaseapp.com",
  projectId: "mern-blog-58e28",
  storageBucket: "mern-blog-58e28.appspot.com",
  messagingSenderId: "219659382880",
  appId: "1:219659382880:web:ea19542703bb09c09f1305"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 