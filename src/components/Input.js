import React, { useState } from 'react';
import Todo from './Todo';
 /*
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({onEnterInput}) {
  const [newItem, setNewItem] = useState("");
  
  const setInput = (event) => {
    setNewItem(event.target.value);
  } 

  const handleSubmit = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      console.log("enter");
      onEnterInput(newItem);
      setNewItem("");
    }
  }

  return (
    <div className="panel-block">
       <input 
        class="input" 
        type="text" 
        placeholder="Todoを入力してください" 
        value={newItem}
        onKeyPress={handleSubmit}
        onChange={setInput}
        />
    </div>
  );
}

export default Input;
