// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYxVwOA2VQAKQ80KLOsIRipnccFSZpUYU",
  authDomain: "netflix-gpt-65fc4.firebaseapp.com",
  projectId: "netflix-gpt-65fc4",
  storageBucket: "netflix-gpt-65fc4.appspot.com",
  messagingSenderId: "403018633712",
  appId: "1:403018633712:web:79bd7e7dfde1edfff78d35",
  measurementId: "G-DLVM7H1QS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();