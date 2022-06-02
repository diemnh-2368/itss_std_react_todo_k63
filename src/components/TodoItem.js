import { useState } from "react";

/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem(props) {
  const [stateMode,setStateMode] = useState(false);
  return (
    <label className="panel-block">
      <label className={`panel-block ${stateMode?"has-text-grey-light":""}`}>
            <input type="checkbox" onClick={e=>setStateMode(stateMode?false:true)}/>
            {props.item.text}
      </label>
    </label>
  );
}

export default TodoItem;