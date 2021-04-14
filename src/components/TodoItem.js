/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import React from 'react';
function TodoItem({item, onClickBox}  ) {
  
  const onclick = (key) => {
    onClickBox(key);
  }
   
  return (
    
    <label className= {item.done ? "panel-block has-text-grey-light" : "panel-block"}>
      <input type="checkbox" onClick={() => onclick(item.key)} defaultChecked={item.done}/>
      {item.text}
    </label>
  );
}


export default TodoItem;