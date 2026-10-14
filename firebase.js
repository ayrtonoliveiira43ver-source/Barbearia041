import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const app = initializeApp({
  apiKey:'AIzaSyDWiO8GnvwIqeLpokE3NWnqt-3n1YC5dpM',
  authDomain:'barbearia041-5629f.firebaseapp.com',
  projectId:'barbearia041-5629f',
  storageBucket:'barbearia041-5629f.firebasestorage.app',
  messagingSenderId:'910092050325',
  appId:'1:910092050325:web:2022aa3772d2630b0c609c'
});
export const auth=getAuth(app);
export const db=getFirestore(app);
