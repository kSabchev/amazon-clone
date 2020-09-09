import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDL-COtKLbIdZfdHP47dKnns7o7aOuLe4",
  authDomain: "clone-kaloyan.firebaseapp.com",
  databaseURL: "https://clone-kaloyan.firebaseio.com",
  projectId: "clone-kaloyan",
  storageBucket: "clone-kaloyan.appspot.com",
  messagingSenderId: "613133291744",
  appId: "1:613133291744:web:4e8763f069cca3da21c085",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db= firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};