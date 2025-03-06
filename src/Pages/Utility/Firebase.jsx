
import {getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import  "firebase/compat/firestore";



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
export const auth = getAuth(app);
export const db =  getFirestore(app);