import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { initialize } from "next/dist/server/lib/render-server";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "chat-app-7df73.firebaseapp.com",
  projectId: "chat-app-7df73",
  storageBucket: "chat-app-7df73.appspot.com",
  messagingSenderId: "544403992865",
  appId: "1:544403992865:web:a15acc9745922e95398e60",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
