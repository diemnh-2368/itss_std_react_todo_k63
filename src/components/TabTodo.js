import React from 'react'
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function TabTodo({ tab, setTab }) {
  return (
    <div class="tabs">
      <ul>
        <li className={tab === 'all' ? 'is-active' : ''} onClick={() => setTab('all')}>
          <a></a>
        </li>
        <li>
          <a>Music</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </ul>
    </div>
  )
}

export default TabTodo
