import { useState, useEffect } from 'react';

import {getTodos, addToFirebase, deleteTodo} from '../lib/firebase';

// const STORAGE_KEY = 'itss-todo';

function useFirebaseStorage() {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const data = getTodos();
    
    setItems(data);
    
  }, []);

  const putItems = items => {
    addToFirebase(items);
    setItems(items);
  };

  const clearItems = (item) => {
    deleteTodo(item)
    setItems([]);
    
  };

  return [items, putItems, clearItems];
}

export default useFirebaseStorage;