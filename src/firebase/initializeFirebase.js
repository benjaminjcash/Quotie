import firebaseConfig from './firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;