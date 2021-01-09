import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBCf1HUM6JQ54gFqVOxwykZS3NzbbSC_xU",
  authDomain: "arkitalk.firebaseapp.com",
  projectId: "arkitalk",
  // storageBucket: "arkitalk.appspot.com",
  // messagingSenderId: "776774778369",
  appId: "1:776774778369:web:e6872ddd16a6b8d8954a00",
  measurementId: "G-2G8KW7V26N"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
