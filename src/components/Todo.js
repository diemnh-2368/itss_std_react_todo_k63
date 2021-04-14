import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems, clearItems] = useStorage([]);
  
  const [tab,setTab] = useState("すべて");
  const itemTab = () => {
      const tabItem = items.filter((item) => {
          if (tab === "すべて")
              return item;
          if (tab === "未完了" && !item.done) {
              return item;
          }
          if (tab === "完了済み" && item.done) {
              return item;
          }
      });
      return tabItem;
  };
  const handleChangeTab = (target) =>{
      setTab(target);
  };
const onChange = (e) => {
  if(e.key === 'Enter'){
    const newItem =  {
      key: getKey(),
      text: e.target.value,
      done: false
    }
    items.push(newItem);
    putItems([...items]);
  }
}

const onClickBox = (key) => {
    items.map(item => {
      if(item.key === key) {
        item.done = !item.done;
      }
    });
    putItems([...items]);
  }

  const todo = itemTab().map(item => (
    <TodoItem 
         key={item.key}
         item={item}
         onClickBox={onClickBox}
    />
  ));

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <label>
        <input className="input" type="text" onKeyDown={(e) => onChange(e)}></input>
      </label>
      <br/>
      <Filter onClick={handleChangeTab}/>
      {todo}
      <div className="panel-block">
        {itemTab().length} items
      </div>
      <div className="panel-block">
      </div>
    </div>
    );
}

export default Todo;