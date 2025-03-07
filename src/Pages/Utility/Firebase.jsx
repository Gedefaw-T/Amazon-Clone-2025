import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcM5wvKmiFRaT_H9QfZ9nGIqDCGSQrt_o",
  authDomain: "project-82dba.firebaseapp.com",
  projectId: "project-82dba",
  storageBucket: "project-82dba.firebasestorage.app",
  messagingSenderId: "355131584711",
  appId: "1:355131584711:web:8c60c8c852b035eb818ee2",
  measurementId: "G-45MTYXGTF0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
