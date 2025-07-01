// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "trip-planner-65ec1.firebaseapp.com",
  projectId: "trip-planner-65ec1",
  storageBucket: "trip-planner-65ec1.firebasestorage.app",
  messagingSenderId: "209283167683",
  appId: "1:209283167683:web:df45fb7b1dbe77e501b976",
  measurementId: "G-BPNHGZJ4ZS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);