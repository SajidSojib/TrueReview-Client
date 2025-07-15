// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgUsEVD9tgFt5jtMW-MY4a_iemywvhDNU",
  authDomain: "true-review-3d3e3.firebaseapp.com",
  projectId: "true-review-3d3e3",
  storageBucket: "true-review-3d3e3.firebasestorage.app",
  messagingSenderId: "720489881109",
  appId: "1:720489881109:web:3a3fbc95f085ed2dfb381c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;