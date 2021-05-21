import firebase from 'firebase';


if(!firebase.apps.length){
const firebaseConfig = {
  apiKey: "AIzaSyDlxGRBIPlQDFoAA3WVkx9zwNPSZHHFa_o",
  authDomain: "todo-54828.firebaseapp.com",
  projectId: "todo-54828",
  storageBucket: "todo-54828.appspot.com",
  messagingSenderId: "742298622534",
  appId: "1:742298622534:web:38d0775cf6adfa8ff7c847",
  measurementId: "G-ZR3Q9BN1H4"
};

 firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export const getFirebaseItems = async  () => {
    try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

const db = firebase.firestore();

export const getFirebaseItems = async () => {
  try {
    const snapshot = await db
      .collection("todos")
      .get();
    const items = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export const addFirebaseItem = async (item) => {
  try {
    const todoRef = db.collection("todos");
    await todoRef.add(item);
  } catch (err) {
    console.log(err);
  }
}

export const updateFirebaseItem = async (item, id) => {
  try {
    const todoRef = db.collection("todos").doc(id);
    await todoRef.update(item);
  } catch (err) {
    console.log(err);
  }
}

export const clearFirebaseItem = async (item) => {
  const todoRef = db.collection("todos").doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
}; 