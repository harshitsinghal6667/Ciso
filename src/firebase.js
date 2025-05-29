// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeV22TmYUyY0oVo5e4KXQYQfjtE80QFfY",
  authDomain: "ciso-d44c1.firebaseapp.com",
  projectId: "ciso-d44c1",
  appId: "1:1077907734555:web:9b89c2a83231b62df738be"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
