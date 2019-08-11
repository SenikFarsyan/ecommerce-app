import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDt5qNBZg-lWY-9l8Zkjnn-11h4uhu2PMQ',
  authDomain: 'crwn-db-4dd01.firebaseapp.com',
  databaseURL: 'https://crwn-db-4dd01.firebaseio.com',
  projectId: 'crwn-db-4dd01',
  storageBucket: '',
  messagingSenderId: '683909243614',
  appId: '1:683909243614:web:9a8b86c010f7d945'
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
