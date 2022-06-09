import React, { useEffect, useState } from 'react';

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
  const [items, putItems, clearItems] = useStorage();
  // const [items, putItems] = React.useState([
  //     /* テストコード 開始 */
  //   { key: getKey(), text: '日本語の宿題', done: false },
  //   { key: getKey(), text: 'reactを勉強する', done: true },
  //   { key: getKey(), text: '明日の準備をする', done: false },
  //   /* テストコード 終了 */
  // ]);

  const [displayItems, setDisplayItems] = useState(items)
  // 0: 全て, 1: 未完了, 2: 完了済み
  const [optionFilter, setOptionFilter] = useState(0)

  const addItem = (text) => {
    let newItem = {key: getKey(), text, done: false}
    putItems([...items, newItem])
  }

  useEffect(() => {
    let newDisplayItems = items.filter(x => {
      if (optionFilter == 0) {
        return true
      }
      if (optionFilter == 1) {
        return !x.done
      }

      return x.done
    })

    setDisplayItems(newDisplayItems)
  }, [items, optionFilter])

  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>

      <Input setData={(text) => addItem(text)} />

      <Filter option={optionFilter} setOption={setOptionFilter} />

      {displayItems.map(item => (
        <TodoItem key={item.key} item={item} data={items} setData={putItems} />
      ))}

      <div className="panel-block">
        {displayItems.length} items
      </div>

      <div className='panel-block'>
        <button className='button is-fullwidth' onClick={() => clearItems()}>全てのToDoを削除</button>
      </div>
    </div>
  );
}

export default Todo;