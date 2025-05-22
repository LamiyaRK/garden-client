// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWyL6YbKGUw5WzvAuZLt3vGuEReHn_W7k",
  authDomain: "garden-825e1.firebaseapp.com",
  projectId: "garden-825e1",
  storageBucket: "garden-825e1.firebasestorage.app",
  messagingSenderId: "848044631793",
  appId: "1:848044631793:web:c9970614353764bf6cab50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);