import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCDG-xVxVt-8Zg1UO1k5VjtKQV__HF1Oo4",
    authDomain: "neo-zone.firebaseapp.com",
    projectId: "neo-zone",
    storageBucket: "neo-zone.firebasestorage.app",
    messagingSenderId: "134710023422",
    appId: "1:134710023422:web:4952caecf0e09b9b2081af"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;