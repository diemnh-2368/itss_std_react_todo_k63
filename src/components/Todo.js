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

  const [active, setActive] = React.useState(1);

  const [inputValue, setInputValue] = React.useState("");

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleActive = (x) => {
    setActive(x);
  }

  const addItem = () => {
    putItems([...items, { key: getKey(), text: inputValue, done: false }])
  }

  return (
    <article class="panel is-primary">
      <p class="panel-heading">
        Todo App
      </p>
      <p class="panel-tabs">
        <a
          class={active === 1 ? "is-active" : ""}
          onClick={() => {
            handleActive(1)}
          }
        >
          全て
        </a>
        <a
          class={active === 2 ? "is-active" : ""}
          onClick={() => {
            handleActive(2)}
          }
        >
          未完了
        </a>
        <a
          class={active === 3 ? "is-active" : ""}
          onClick={() => {
            handleActive(3)}
          }
        >
          完了済み
        </a>
      </p>

      <input
        style={{
          marginTop: "1rem",
          width:"40%"
        }}
        placeHolder="New item..."
        className="input is-primary"
        type="text"
        onKeyDown={handleKey}
        value={inputValue}
        onChange={handleChange}
      />
      {
        items.map((item => (
            active === 1 ||
            (active === 2 && item.done) ||
            (active === 3 && !(item.done)) 
              ? 
                <TodoItem items={items} item={item} putItems={putItems}/>
              :
                null
          )))
      }
    </article>
  );
}

export default Todo;
