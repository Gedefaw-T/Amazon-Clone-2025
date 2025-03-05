// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore'
import { getAuth} from 'firebase/auth';
import { db} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcM5wvKmiFRaT_H9QfZ9nGIqDCGSQrt_o",
  authDomain: "project-82dba.firebaseapp.com",
  projectId: "project-82dba",
  storageBucket: "project-82dba.firebasestorage.app",
  messagingSenderId: "355131584711",
  appId: "1:355131584711:web:8c60c8c852b035eb818ee2",
  measurementId: "G-45MTYXGTF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fire = getFirestore(app);
export const Auth = getAuth(app);
export const db =  getFirestore(app);