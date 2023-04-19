// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from 'firebase/database';
    // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz5xTx27uDxKoGNS0gDqZiL8Zhh0pnj30",
  authDomain: "finance-b0f89.firebaseapp.com",
  projectId: "finance-b0f89",
  storageBucket: "finance-b0f89.appspot.com",
  messagingSenderId: "538040757939",
  appId: "1:538040757939:web:86b15acf718c16dc57cac6",
  measurementId: "G-WHF2XCS1KY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =  getAuth()
const firebase = getDatabase(app)
export {app,auth,firebase};