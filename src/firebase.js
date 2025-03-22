
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsvMqZw75XBKJyQV8sD5U8DXJTGi9O94I",
  authDomain: "react-portfolio-sushil.firebaseapp.com",
  projectId: "react-portfolio-sushil",
  storageBucket: "react-portfolio-sushil.firebasestorage.app",
  messagingSenderId: "252297371102",
  appId: "1:252297371102:web:b9cdb24d51477b3539114f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
