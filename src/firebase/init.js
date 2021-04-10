import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKdQsKmB-04lFeqL70pg5SPNvlVi7JnN8",
  authDomain: "soen357-showcase.firebaseapp.com",
  projectId: "soen357-showcase",
  storageBucket: "soen357-showcase.appspot.com",
  messagingSenderId: "803769353471",
  appId: "1:803769353471:web:ee876c5a27ba096bfb38ca",
  measurementId: "G-HGFP2LDXP9",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);
export default firebase;
