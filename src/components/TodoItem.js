import React, { useState } from 'react';
import '../styles/check.css';
/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem(props) {
  const [checked, setChecked] = React.useState(props.item.done);
  const handleCheckBox = () => {
    console.log('Long');
    setChecked(!checked);
  }
  return (
    <label className="panel-block">
      <input type="checkbox" onClick={handleCheckBox} />
            <p className={checked ? 'has-text-grey-light' : 'normal'}>{props.item.text}</p>
    </label>
  );
}

export default TodoItem;