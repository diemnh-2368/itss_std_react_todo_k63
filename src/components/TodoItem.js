import React, { useState } from 'react';
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( {item}  ) {
  const changeColor = () => {
    if (item.done == false) {
      item.done = true;
      var changeElement = document.getElementById(item.key);
      changeElement.style.color = "lightgrey";
    } else {
      item.done = false;
      var changeElement = document.getElementById(item.key);
     changeElement.style.color = "black";
    }
  }
  return (
   <label className="panel-block" id={item.key}>
      <input type="checkbox" onClick={changeColor} />
      {item.text}
    </label>
  );
}

export default TodoItem;