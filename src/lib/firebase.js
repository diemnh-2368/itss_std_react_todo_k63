import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCNDYQsn_6oUzTshllk6aga5DSzAlzDFYM",
    authDomain: "fir-sample-51a66.firebaseapp.com",
    projectId: "fir-sample-51a66",
    storageBucket: "fir-sample-51a66.appspot.com",
    messagingSenderId: "14958358950",
    appId: "1:14958358950:web:b027439cb64d3de8cc9f67"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const collection = firebase.firestore().collection("todos");

// get items
export const getFbItems = async () => {
    const data = await collection.get();
    const items = data.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id })
    );
    return items;
}

//add item
export const addFbItem = async (item) => {
    await collection.add(item);
}

//update item
export const updateFbItem = async (item, id) => {
    await collection.doc(id).update(item);
}

//delete item
export const deleteFbItem = async (item) => {
  const todoRef = collection.doc(item.id);
  await todoRef.delete().then(function () {
  }).catch(function (err) {
    console.log(err);
  });
};  