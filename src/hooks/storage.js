import { useState, useEffect } from "react";

/* 
  【Storageフック】
　・TodoをlocalStorageを使って保存する
　・以下機能をサポートする
　  - localstrageに保存されているすべてのTodoの読み出し機能
　  - Todoをlocalstrageに保存する
　  - localstrageにあるTodoを削除する
*/

const STORAGE_KEY = "itss-todo";

function useStorage() {
  const [items, setItems] = useState([]);
  
  /* 副作用を使う */
  useEffect(() => {
    try {
      setItems(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    } catch (e) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
      setItems(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    }
  }, []);

  const setTmpItems = (items) => {
    setItems(items);
  };

  const putItems = (items) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    setItems(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  };

  const clearItems = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    setItems(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  };

  return [items, setTmpItems, putItems, clearItems];
}

export default useStorage;
