import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import firebaseConfig from './FirebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth;
export const firebaseAppAuth = firebase.auth();
export const firebaseAppGoogleLogin = new firebaseAuth.GoogleAuthProvider();
export const firebaseAppDBRef =  firebase.database();
export default firebaseApp;
