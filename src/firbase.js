/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Remove the following line since initializeApp has already been imported above
// import { initializeApp } from 'firebase/app';

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to Firebase Storage
const projectStorage = getStorage(firebaseApp);

// Get a reference to Firestore
const projectFirestore = getFirestore(firebaseApp);

export const getImageFiles = async () => {
  try {
    const imageRefs = await projectStorage.ref("images").listAll();
    return imageRefs.items;
  } catch (error) {
    console.error("Error fetching image files:", error);
    return [];
  }
};

export { projectFirestore, projectStorage };
// Import other Firebase modules as needed

// Path: src/hooks/useStorage.js
