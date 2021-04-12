import * as firebase from "firebase/app";
import "firebase/messaging";
import "firebase/auth";
import "firebase/functions";
const firebaseConfig = {
  apiKey: "AIzaSyBKdQsKmB-04lFeqL70pg5SPNvlVi7JnN8",
  authDomain: "soen357-showcase.firebaseapp.com",
  projectId: "soen357-showcase",
  storageBucket: "soen357-showcase.appspot.com",
  messagingSenderId: "803769353471",
  appId: "1:803769353471:web:ee876c5a27ba096bfb38ca",
  measurementId: "G-HGFP2LDXP9",
};
firebase.initializeApp(firebaseConfig);

// if ("Notification" in window) {
//   const messaging = firebase.messaging();
//   messaging.usePublicVapidKey(process.env.REACT_APP_FIREBASE_MESSAGING_CERT);

//   messaging.onMessage(payload => {
//     console.log("Message received. ", payload);
//     // push message to UI
//   });

//   messaging.onTokenRefresh(() => {
//     const db = firebase.firestore();
//     messaging
//       .getToken()
//       .then(refreshedToken => {
//         db.collection("users")
//           .doc(firebase.auth().currentUser.uid)
//           .update({ pushTokenWeb: refreshedToken })
//           .then(() => {
//             console.log("Token updated.");
//           })
//           .catch(err => console.log(err));
//       })
//       .catch(err => {
//         console.log("Unable to retrieve refreshed token ", err);
//       });
//   });
// }

export default firebase;
