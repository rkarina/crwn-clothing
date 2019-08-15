import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCw2XQAoAP0wR_XVKRaJp9-XJFOmexhna8",
    authDomain: "crwn-app-2db24.firebaseapp.com",
    databaseURL: "https://crwn-app-2db24.firebaseio.com",
    projectId: "crwn-app-2db24",
    storageBucket: "crwn-db.appspot.com",
    messagingSenderId: "882785132297",
    appId: "1:882785132297:web:6dfeeaa738e0b788"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
