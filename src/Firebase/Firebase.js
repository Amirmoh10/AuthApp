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
export const createUserProfileDocument = async (userAuth, additionalData) => { //userAuth {currentUser} is the user object we get from firebase, additionalData for example displayname. 
  if (!userAuth) return; //if no user do nothing, for example when we sign out
 
  const userRef = firestore.doc(`users/${userAuth.uid}`);  //if user exist we quere for the document. queryref has method that allows us to get data using snapshot

  const snapShot = await userRef.get();

  if (!snapShot.exists) {                            //if there is no user, use the user we get from autherntication and create one on the firestore databse. 
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
export const firestore = firebase.firestore(); // NEW
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithGithub = () => auth.signInWithPopup(githubProvider);
export const signOut = () => auth.signOut();
export default firebase;
