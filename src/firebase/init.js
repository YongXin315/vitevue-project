import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDSFUoWNmdlw4OyCK89i5DCX1MvSkZyo6E",
  authDomain: "blood-bank-vue.firebaseapp.com",
  projectId: "blood-bank-vue",
  storageBucket: "blood-bank-vue.appspot.com",
  messagingSenderId: "1005473572226",
  appId: "1:1005473572226:web:2c6519c0684db8307e1b9b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore()
export const auth =getAuth()

