/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/

function TodoItem(props) {
  const check = () => {
    props.item.done = !props.item.done;
    props.putItems([...props.items]);
  }

  return (
    <label
      className={props.item.done ? "panel-block has-text-grey-light" : "panel-block"}
    >
      <input type="checkbox" onChange={check} checked={props.item.done}/>
      {props.item.text}
    </label>
  );
}

export default TodoItem;