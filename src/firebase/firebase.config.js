// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhH_xdagjX_kth70HZIkiGL6YiIWQXDo0",
  authDomain: "assignment-11-a2b0e.firebaseapp.com",
  projectId: "assignment-11-a2b0e",
  storageBucket: "assignment-11-a2b0e.appspot.com",
  messagingSenderId: "853944969860",
  appId: "1:853944969860:web:6a58c02f7eeb0a0e25f0d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
