// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4jglPbW9cI7nTik3bdkQYlabLPzRgR5A",
  authDomain: "rta---progress-tracker.firebaseapp.com",
  projectId: "rta---progress-tracker",
  storageBucket: "rta---progress-tracker.firebasestorage.app",
  messagingSenderId: "678882778762",
  appId: "1:678882778762:web:110180281479f48ff59773",
  measurementId: "G-4W1MV36YEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);