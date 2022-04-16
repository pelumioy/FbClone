// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import {getStorage} from 'firebase/storage'

import "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZRUWHYk8s4nxeX6mnM6LiNB8NX2LXNz8",
  authDomain: "fbclone-983a2.firebaseapp.com",
  projectId: "fbclone-983a2",
  storageBucket: "fbclone-983a2.appspot.com",
  messagingSenderId: "271276712529",
  appId: "1:271276712529:web:236202430722b4cda3ce70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}