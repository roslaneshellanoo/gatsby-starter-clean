import Rebase from 're-base';
import firebase from 'firebase/app';
import database from 'firebase/database';

let app = firebase.initializeApp({
    apiKey: "AIzaSyBT42Eo24S-vaR0QXMOL7MhCbqOWSPg3a4",
    authDomain: "vue-firebase-55aac.firebaseapp.com",
    databaseURL: "https://vue-firebase-55aac.firebaseio.com",
    projectId: "vue-firebase-55aac",
    storageBucket: "vue-firebase-55aac.appspot.com",
    messagingSenderId: "356906720314"
});

let db = database(app);
let base = Rebase.createClass(db);

export default base;