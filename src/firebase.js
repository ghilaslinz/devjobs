import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBQOlNDCKIbgwZpVTxvI8ccm7x-1m6VXuA",
    authDomain: "devjobs-3c09b.firebaseapp.com",
    projectId: "devjobs-3c09b",
    storageBucket: "devjobs-3c09b.appspot.com",
    messagingSenderId: "951470649117",
    appId: "1:951470649117:web:5f8d19cb19a82583ef7bf4",
    measurementId: "G-P5ZN5FGKYZ"
  };

  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;

