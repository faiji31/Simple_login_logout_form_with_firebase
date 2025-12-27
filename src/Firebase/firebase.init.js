// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEcUkQpWWZdr7i-OOKO3YjIItOMb65Grs",
  authDomain: "simple-login-logout-bfeff.firebaseapp.com",
  projectId: "simple-login-logout-bfeff",
  storageBucket: "simple-login-logout-bfeff.firebasestorage.app",
  messagingSenderId: "650012300188",
  appId: "1:650012300188:web:fae7150746b4d853cdae59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);