/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import React, { useState } from 'react';
function TodoItem({item}) {
  // const [done,setDone] = useState(item.done)
  // const handleDone = () => {
  //   setDone(!item.done)
  // }
  return (
    <label className="panel-block ">
            <input  type="checkbox" />
            {item.text}
      </label>
  );
}

export default TodoItem;