import React, { useState } from 'react';
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( {item} ) {
  const [state, setState] = useState({
    isChecked: false
  })

  function changeState() {
    setState({isChecked: !state.isChecked});
  }
  
  return (
    <label className="panel-block">
      <input type="checkbox" 
        onChange={changeState}
      />
      <span className={state.isChecked ? "has-text-grey-light" : ""}>{item.text}</span>
    </label>
  );
}

export default TodoItem;