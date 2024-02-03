import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCJle4xz9spXACJFNCtUbye1sI-kgUeNkk",
  authDomain: "blogs-94fea.firebaseapp.com",
  projectId: "blogs-94fea",
  storageBucket: "blogs-94fea.appspot.com",
  messagingSenderId: "299976096420",
  appId: "1:299976096420:web:3d94aaf7c7f6d6ccbbc431"
};
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);
