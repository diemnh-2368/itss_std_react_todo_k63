import React, { useState } from 'react'

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem'
import Input from './Input'
import Filter from './Filter'
import TabTodo from './TabTodo'

/* カスタムフック */
import useStorage from '../hooks/storage'

/* ライブラリ */
import { getKey } from '../lib/util'

function Todo() {
  // const [items, putItems] = React.useState([
  //   /* テストコード 開始 */
  //   { key: getKey(), text: '日本語の宿題', done: false },
  //   { key: getKey(), text: 'reactを勉強する', done: false },
  //   { key: getKey(), text: '明日の準備をする', done: false },
  //   /* テストコード 終了 */
  // ])

  const [items, putItems, clearItems] = useStorage()

  const handleStatus = (e, key) => {
    const itemIndex = items.findIndex((ele) => ele.key === key)
    items[itemIndex].done = e.target.checked

    putItems([...items])
  }

  const [title, setTitle] = useState('')
  const [tab, setTab] = useState('all')

  const notyetItems = items.filter((element) => element.done === false)
  const doneItems = items.filter((element) => element.done === true)

  const handleAddTodo = (e) => {
    setTitle(e.target.value)
    if (e.key === 'Enter') {
      putItems([...items, { key: getKey(), text: title, done: false }])
      setTitle('')
    }
  }

  const display = (listItems) => {
    return (
      <>
        {listItems.map((item) => (
          <TodoItem item={item} key={item.key} handleStatus={handleStatus} />
        ))}
        <div className="panel-block">{listItems.length} items</div>
      </>
    )
  }

  return (
    <div className="panel">
      <div className="panel-heading">ITSS ToDoアプリ</div>
      <TabTodo tab={tab} setTab={setTab} />
      <input
        type="text"
        value={title}
        placeholder="title"
        className="input"
        onChange={handleAddTodo}
        onKeyDown={handleAddTodo}
      />
      {tab === 'all'
        ? display(items)
        : tab === 'notyet'
        ? display(notyetItems)
        : display(doneItems)}
      <button class="button is-danger button-local-storage" onClick={clearItems}>
        全てのTodosを削除
      </button>
    </div>
  )
}

export default Todo
