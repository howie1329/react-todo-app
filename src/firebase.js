// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQVB-wv1v9T0BqP81gkQAd0xgyu1Y_0qk",
  authDomain: "todo-app-dd008.firebaseapp.com",
  projectId: "todo-app-dd008",
  storageBucket: "todo-app-dd008.appspot.com",
  messagingSenderId: "570476371707",
  appId: "1:570476371707:web:49024d12e967b3d7abda5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);