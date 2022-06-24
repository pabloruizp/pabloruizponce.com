// src/firebaseInit.js
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const apiKey = import.meta.env.VITE_apiKey 
const authDomain =  import.meta.env.VITE_authDomain
const projectId = import.meta.env.VITE_projectId 
const storageBucket =  import.meta.env.VITE_storageBucket 
const messagingSenderId = import.meta.env.VITE_messagingSenderId 
const appId = import.meta.env.VITE_appId
const measurementId = import.meta.env.VITE_measurementId

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId
};

const app = initializeApp(firebaseConfig)
// Initialize Firebase
export default getFirestore(app);