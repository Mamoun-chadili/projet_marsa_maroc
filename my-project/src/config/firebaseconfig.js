
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCDZtq5jGTiqNp8okQNpzcQ4hup4da8VvM",
  authDomain: "marsa-maroc-c75fc.firebaseapp.com",
  projectId: "marsa-maroc-c75fc",
  storageBucket: "marsa-maroc-c75fc.appspot.com",
  messagingSenderId: "566195266648",
  appId: "1:566195266648:web:064ef1b3a321535fe6962d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);