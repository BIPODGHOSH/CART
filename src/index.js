import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2s8kSfPjpTZcxrPs-LFiuo3-UYp18Z3c",
  authDomain: "cart-d44e4.firebaseapp.com",
  projectId: "cart-d44e4",
  storageBucket: "cart-d44e4.appspot.com",
  messagingSenderId: "446669141093",
  appId: "1:446669141093:web:053575c67f7f26409cc28c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let db = getFirestore(app);
export default db;
// console.log(db);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

