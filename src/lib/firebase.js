import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYT6BuO6UKkgTw6RdHQrkeRRHJEWB8BVE",
    authDomain: "todos-c4dee.firebaseapp.com",
    projectId: "todos-c4dee",
    storageBucket: "todos-c4dee.appspot.com",
    messagingSenderId: "450246456829",
    appId: "1:450246456829:web:6005daa376247e2dd79594",
    measurementId: "G-RT9PQZ1CPC"
};


firebase.initializeApp(firebaseConfig);