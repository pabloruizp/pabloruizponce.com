// src/firebaseInit.js
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

console.log( process.env.apiKey)
console.log( process.env.authDomain)
console.log( process.env.projectId)
console.log( process.env.storageBucket)
console.log( process.env.messagingSenderId)
console.log( process.env.appId)
console.log( process.env.measurementId)


const apiKey = import.meta.env.VITE_apiKey != undefined ? import.meta.env.VITE_apiKey : process.env.apiKey
const authDomain =  import.meta.env.VITE_authDomain != undefined ? import.meta.env.VITE_authDomain : process.env.authDomain
const projectId = import.meta.env.VITE_projectId != undefined ? import.meta.env.VITE_projectId : process.env.projectId
const storageBucket =  import.meta.env.VITE_storageBucket != undefined ? import.meta.env.VITE_storageBucket : process.env.storageBucket
const messagingSenderId = import.meta.env.VITE_messagingSenderId != undefined ? import.meta.env.VITE_messagingSenderId : process.env.messagingSenderId
const appId = import.meta.env.VITE_appId != undefined ? import.meta.env.VITE_appId : process.env.appId
const measurementId = import.meta.env.VITE_measurementId != undefined ? import.meta.env.VITE_measurementId : process.env.measurementId

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