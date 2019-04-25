import * as firebase from 'firebase'
import {firestore} from 'firebase';
var config = {
    apiKey: "AIzaSyDpb7h5JBgnydu6-frGOthJLbR32Arc2yE",
    authDomain: "beta-ecom.firebaseapp.com",
    databaseURL: "https://beta-ecom.firebaseio.com",
    projectId: "beta-ecom",
    storageBucket: "beta-ecom.appspot.com",
    messagingSenderId: "567196113136"
};
  firebase.initializeApp(config);
export default firebase;
export const db = firebase.firestore;