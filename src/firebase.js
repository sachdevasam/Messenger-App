
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBp-HiBDYrfzRmNP12mwZUVN25hAVP_j30",
    authDomain: "chat-app-cfa55.firebaseapp.com",
    projectId: "chat-app-cfa55",
    storageBucket: "chat-app-cfa55.appspot.com",
    messagingSenderId: "433167123689",
    appId: "1:433167123689:web:73554910435f85d22f1c78"
  };
  

// Initialize Firebase
// export const db = getFirestore(app);
 export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()