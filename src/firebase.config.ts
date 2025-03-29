import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};

// Initialize Firebase Initialize Firebase
const app=initializeApp(firebaseConfig);

// Get a Firestore instance
const db = getFirestore(app);
const storage=getStorage(app);
const getCollectionProps:(collectionName:string)=>any=(collectionName:string)=>{
return collection(db,collectionName);
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export {db,app,getCollectionProps,storage,auth, googleProvider};