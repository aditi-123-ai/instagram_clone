import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6-7NrUYb18FCxnC_r-xUU_vOFgylqhr0",
  authDomain: "instagram-clone-6250f.firebaseapp.com",
  projectId: "instagram-clone-6250f",
  storageBucket: "instagram-clone-6250f.appspot.com",
  messagingSenderId: "164996602620",
  appId: "1:164996602620:web:02a551f996b236f7475579"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };


// 164996602620-uvv416moome2u2ks4a6vn5ds709n6qf6.apps.googleusercontent.com
// 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