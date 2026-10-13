
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWiO8GnvwIqeLpokE3NWnqt-3n1YC5dpM",
  authDomain: "barbearia041-5629f.firebaseapp.com",
  projectId: "barbearia041-5629f",
  storageBucket: "barbearia041-5629f.firebasestorage.app",
  messagingSenderId: "910092050325",
  appId: "1:910092050325:web:2022aa3772d2630b0c609c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
export const configured = true;
