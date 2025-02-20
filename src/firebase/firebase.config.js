// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWk-g5PyABBgx2rPcdm9Ixc-N4ziGWWY4",
  authDomain: "task-management-client-c89d8.firebaseapp.com",
  projectId: "task-management-client-c89d8",
  storageBucket: "task-management-client-c89d8.firebasestorage.app",
  messagingSenderId: "570881181772",
  appId: "1:570881181772:web:3a019bb4bcd2e1d5744ce9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);