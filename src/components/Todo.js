import React from 'react'

/* スタイルシート */
import '../styles/main.css';

/* コンポーネント */
import TodoItem from './TodoItem';
import {getKey} from "../lib/util";

function Todo() {
  const [items, putItems] = React.useState([
      /* テストコード 開始 */
    { key: getKey(), text: '日本語の宿題', done: false },
    { key: getKey(), text: 'reactを勉強する', done: false },
    { key: getKey(), text: '明日の準備をする', done: false },
    /* テストコード 終了 */
  ]);

  return (
    <article class="panel is-primary">
      <p class="panel-heading">
        Primary
      </p>
      <p class="panel-tabs">
        <a class="is-active">All</a>
        <a>Public</a>
        <a>Private</a>
        <a>Sources</a>
        <a>Forks</a>
      </p>
      {items.map(item => (
          <TodoItem text={item.text} />
      ))}
    </article>
  );
}

export default Todo;
