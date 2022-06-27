import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = { 
  apiKey : "AIzaSyD4c6VqBP_Xkg3lWw58ECOUsFE1Qfa8xzg" , 
  authDomain : "fir-sample-76cad.firebaseapp.com" , 
  projectId : "fir-sample-76cad" , 
  storageBucket : "fir-sample-76cad.appspot.com" , 
  messagingSenderId : "1062038389602" , 
  appId : "1:1062038389602:web:2fefe1ece7bbd016ade23b" 
};
firebase.initializeApp(firebaseConfig);

export const getTodos = async () => { 
                                     const response = await firebase.firestore().collection("todos").get()
                                     console.log(response)
return firebase.firestore().collection("todos").get()
}
export const addToFirebase = (item) => {
firebase.firestore().collection("todos").add(item);
}

export const updateTodo  =  (item) => {
  firebase.firestore().collection("todos").doc(item.id).update(item.done)
}

export const deleteTodo = (item) => {
  firebase.firestore().collection("todos").doc(item.id).delete()

}

export default  {
  getTodos,
  addToFirebase,
  updateTodo,
  deleteTodo
}