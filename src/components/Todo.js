import React from "react";
import useStorage from "../hooks/storage";

/* スタイルシート */
import "../styles/main.css";

/* コンポーネント */
import TodoItem from "./TodoItem";
import { getKey } from "../lib/util";

function Todo() {
  const [items, setTmpItems, putItems, clearItems] = useStorage();

  const [active, setActive] = React.useState(0);
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    setActive(1);
  }, []);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleActive = (x) => {
    setActive(x);
  };

  const handleSave = () => {
    putItems([...items]);
  };

  const addItem = () => {
    setTmpItems([...items, { key: getKey(), text: inputValue, done: false }]);
  };

  return (
    <article class="panel is-primary">
      <p class="panel-heading">Todo App</p>
      <p class="panel-tabs">
        <a
          href={0}
          class={active === 1 ? "is-active" : ""}
          onClick={(e) => {
            e.preventDefault();
            handleActive(1);
          }}
        >
          全て
        </a>
        <a
          href={0}
          class={active === 2 ? "is-active" : ""}
          onClick={(e) => {
            e.preventDefault();
            handleActive(2);
          }}
        >
          未完了
        </a>
        <a
          href={0}
          class={active === 3 ? "is-active" : ""}
          onClick={(e) => {
            e.preventDefault();
            handleActive(3);
          }}
        >
          完了済み
        </a>
      </p>

      <input
        style={{
          margin: "1rem",
          width: "40%",
        }}
        placeHolder="New item..."
        className="input is-primary"
        type="text"
        onKeyDown={handleKey}
        value={inputValue}
        onChange={handleChange}
      />
      {items.map((item) =>
        active === 1 ||
        (active === 2 && item.done) ||
        (active === 3 && !item.done) ? (
          <TodoItem items={items} item={item} putItems={setTmpItems} />
        ) : null
      )}
      <br />
      <button
        class="button is-primary"
        style={{ marginBottom: "1rem", marginLeft: "2rem" }}
        onClick={handleSave}
      >
        保存する
      </button>
      <button
        class="button is-warning"
        style={{ marginBottom: "1rem", marginLeft: "2rem" }}
        onClick={clearItems}
      >
        クリアする
      </button>
    </article>
  );
}

export default Todo;
