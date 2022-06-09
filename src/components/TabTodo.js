import React from 'react'
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function TabTodo({ tab, setTab }) {
  return (
    <div class="tabs is-centered">
      <ul>
        <li className={tab === 'all' ? 'is-active' : ''} onClick={() => setTab('all')}>
          <a>全て</a>
        </li>
        <li className={tab === 'notyet' ? 'is-active' : ''} onClick={() => setTab('notyet')}>
          <a>未完了</a>
        </li>
        <li className={tab === 'done' ? 'is-active' : ''} onClick={() => setTab('done')}>
          <a>完了済み</a>
        </li>
      </ul>
    </div>
  )
}

export default TabTodo
