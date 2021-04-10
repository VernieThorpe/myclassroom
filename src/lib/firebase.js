import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6Rbuvy7mWQxajtiaGrDk7QwxdFiy4oDQ",
  authDomain: "myclassroom-120f0.firebaseapp.com",
  projectId: "myclassroom-120f0",
  storageBucket: "myclassroom-120f0.appspot.com",
  messagingSenderId: "465442494204",
  appId: "1:465442494204:web:b63c1bdd8b40b9ed606979",
  measurementId: "G-9W324MSTPY",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
