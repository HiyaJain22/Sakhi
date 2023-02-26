
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBmNC6_Xxch5kq5bChSnFkirT_cpSLfDLY",
  authDomain: "auth-asteroid.firebaseapp.com",
  projectId: "auth-asteroid",
  storageBucket: "auth-asteroid.appspot.com",
  messagingSenderId: "1031146454666",
  appId: "1:1031146454666:web:6fb1ed0bfd867d0637f773"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)
const auth = getAuth()
export { app, auth }
