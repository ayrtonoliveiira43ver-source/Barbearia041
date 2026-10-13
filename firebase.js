import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
const config={apiKey:import.meta.env.VITE_FIREBASE_API_KEY,authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,projectId:import.meta.env.VITE_FIREBASE_PROJECT_ID,storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,appId:import.meta.env.VITE_FIREBASE_APP_ID};
export const configured=Boolean(config.apiKey&&config.projectId);
const app=initializeApp(configured?config:{apiKey:'demo',authDomain:'demo.invalid',projectId:'demo',appId:'demo'});
export const auth=getAuth(app),db=getFirestore(app),storage=getStorage(app),googleProvider=new GoogleAuthProvider();
