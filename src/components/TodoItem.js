/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import { useState } from "react";

function TodoItem(props) {
  const [isActive, setActive] = useState(true);

  const check = () => {
    setActive(!isActive);
  }

  return (
    <label
      className={isActive ? "panel-block" : "panel-block has-text-grey-light"}
      onClick={check}
    >
      <input type="checkbox" onChange={check}/>
      {props.text}
    </label>
  );
}

export default TodoItem;