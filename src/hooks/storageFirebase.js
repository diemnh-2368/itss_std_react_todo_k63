import { useState, useEffect } from 'react';
import { db, addDoc, collection } from '../lib/Firebase';

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
//   });

//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }


/* 
  【Storageフック】
　・TodoをlocalStorageを使って保存する
　・以下機能をサポートする
　  - localstrageに保存されているすべてのTodoの読み出し機能
　  - Todoをlocalstrageに保存する
　  - localstrageにあるTodoを削除する
*/

const STORAGE_KEY = 'itss-todo';

function useStorage() {
  const [items, setItems] = useState([]);

  const querySnapshot = async () => {
    const datas = await getDocs(collection(db, "itss-todo"));
    console.log(datas);
  } 

  const writeColection = async ({ key, text, done }) => {
    const docRef = await addDoc(collection(db, "itss-todo"), { key, text, done });
  }

  const deleteColection = async ({ key }) => {
    await deleteDoc(doc(db, "cities", "DC"));
  }
  // get data from local storage
  useEffect(() => {
    
    querySnapshot();
  }, []);
　
　/* 副作用を使う */
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const putItems = items => {
    items.forEach(e => {
      writeDB(e)
    })
    setItems(items)
  };

  const clearItems = () => {
    setItems([])
  };

  return [items, putItems, clearItems];
}

export default useStorage;