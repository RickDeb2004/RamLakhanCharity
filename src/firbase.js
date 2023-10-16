/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore'
// Remove the following line since initializeApp has already been imported above
// import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyA0PbWDKWDyEw0fopRAcstHhqusEAfOHJ0",
  authDomain: "fir-star-5cbc1.firebaseapp.com",
  projectId: "fir-star-5cbc1",
  storageBucket: "fir-star-5cbc1.appspot.com",
  messagingSenderId: "464393615099",
  appId: "1:464393615099:web:0e2219b70d35d68326e25e",
  measurementId: "G-97PNX445TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
