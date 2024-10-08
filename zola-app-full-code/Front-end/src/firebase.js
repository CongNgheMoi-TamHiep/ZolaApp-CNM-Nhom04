import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "", 
    authDomain: "", 
    projectId: "", 
    storageBucket: "", 
    messagingSenderId: "", 
    appId: "", 
    measurementId: "", 
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const storage = getStorage();