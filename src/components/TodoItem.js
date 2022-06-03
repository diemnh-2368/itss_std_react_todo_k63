/* 
  【TodoItemコンポーネント】
 ・Todoアイテムを表示する
 ・チェックボックスにチェックが入っているか管理する
 ・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem(props) {
  const { item } = props
  console.log("🚀 ~ file: TodoItem.js ~ line 8 ~ TodoItem ~ item", item)

  return (
    <label className="panel-block">
      <input type="checkbox" />
      {item.text}
    </label>
  );
}

export default TodoItem;