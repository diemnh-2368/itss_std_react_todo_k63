import React, { useState, useEffect } from 'react';

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

  const [filterItems, setFilterItems] = useState([]);
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);

  useEffect(() => {
    setFilterItems(items);
  }, [items]);

  const handleOnEnterInput = (newItem) => {
    putItems([
      ...items,
      {
        key: getKey(),
        text: newItem,
        done: false,
      },
    ])
  }

  const handleOnFilterClick = (element) => {
    if (element.id === 2) {
      setFilterItems(items.filter((item) => item.done === false));
    }
    else if (element.id === 3) {
      setFilterItems(items.filter((item) => item.done === true));
    }
    else {
      setFilterItems(items);
    }
  }

  const handleOnItemClick = (newItem) => {
    let changeItems = [];

    for (const item of items){
        if (item.key == newItem.key){
          newItem.done = !newItem.done;
          changeItems.push(newItem);
        } else {
          changeItems.push(item);
        }   
    }
    putItems(changeItems);
    console.log(changeItems);
  }

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
      <Input onEnterInput={handleOnEnterInput} />
      <Filter onFilterClick={handleOnFilterClick}/>
      {filterItems.map(item => (
        <TodoItem 
          key={item.key}
          item={item}
          onItemClick={ () => handleOnItemClick(item)} 
        />
      ))}
      <div className="panel-block">
        {filterItems.length} items
      </div>
    </div>
  );
}

export default Todo;