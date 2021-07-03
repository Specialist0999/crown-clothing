import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBZ44LYBj2SBKTCyF6N1ZbUP7NXBcDC2Bo",
    authDomain: "crwn-db-5ac49.firebaseapp.com",
    projectId: "crwn-db-5ac49",
    storageBucket: "crwn-db-5ac49.appspot.com",
    messagingSenderId: "159042548163",
    appId: "1:159042548163:web:46dd97b86509125a644d76",
    measurementId: "G-762SVD3L00"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
