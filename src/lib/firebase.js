import firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyCSZuINSgxl5amNl37XOxGQq0uVz60NZTU",
    authDomain: "todo-4e604.firebaseapp.com",
    projectId: "todo-4e604",
    storageBucket: "todo-4e604.appspot.com",
    messagingSenderId: "9455344720",
    appId: "1:9455344720:web:8830a47fdbfe65a5158555",
    measurementId: "G-MJ31761WVS"
};

firebase.initializeApp(firebaseConfig);

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
