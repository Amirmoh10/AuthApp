import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCB-ieklCw-I2r_JQsfHKqhhuufD035jNs",
  authDomain: "chatapp-4c121.firebaseapp.com",
  databaseURL: "https://chatapp-4c121.firebaseio.com",
  projectId: "chatapp-4c121",
  storageBucket: "chatapp-4c121.appspot.com",
  messagingSenderId: "716242878567",
  appId: "1:716242878567:web:6d6b84b4a735e6f4c794c2",
  measurementId: "G-GY463MGTBC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.log("error creating user", error.message);
//     }
//   }

//   return userRef;
// };
export const firestore = firebase.firestore(); // NEW
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export default firebase;
