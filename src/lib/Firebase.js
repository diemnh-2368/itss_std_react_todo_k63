// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrCI2AXEUjKJCBDFURe2hQ8K1bpunH5sM",
  authDomain: "itss-9799f.firebaseapp.com",
  projectId: "itss-9799f",
  storageBucket: "itss-9799f.appspot.com",
  messagingSenderId: "168990840563",
  appId: "1:168990840563:web:7995c0a3133a416630c986",
  measurementId: "G-8E0L016P95"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export { app, analytics }

firebase.initializeApp(firebaseConfig);