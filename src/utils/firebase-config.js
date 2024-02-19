// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8Cw6b1z6t8COtkOVPKt0KfJ5E34OXmMY",
  authDomain: "netflix-clone-b4f3f.firebaseapp.com",
  projectId: "netflix-clone-b4f3f",
  storageBucket: "netflix-clone-b4f3f.appspot.com",
  messagingSenderId: "991147622411",
  appId: "1:991147622411:web:aaf816e8611b29e92c070e",
  measurementId: "G-XF4TTKX2BF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
