// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCILrJCntEnWZjXLUlq3DKuTWwesgQ1ug8",
  authDomain: "ema-john-auth-40d8e.firebaseapp.com",
  projectId: "ema-john-auth-40d8e",
  storageBucket: "ema-john-auth-40d8e.appspot.com",
  messagingSenderId: "933203234205",
  appId: "1:933203234205:web:05c99a0b3a2145a75df374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;