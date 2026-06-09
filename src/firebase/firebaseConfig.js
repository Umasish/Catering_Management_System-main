import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDskMj_kltBQh365FahM25BsA4xPIfAvVs",
  authDomain: "catering-management-syst-5fabd.firebaseapp.com",
  projectId: "catering-management-syst-5fabd",
  storageBucket: "catering-management-syst-5fabd.firebasestorage.app",
  messagingSenderId: "161151547377",
  appId: "1:161151547377:web:8232fa010b8df41dc53650"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
