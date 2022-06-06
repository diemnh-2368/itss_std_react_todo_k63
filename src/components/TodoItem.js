/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem(props) {
  const { item, onClick } = props

  const handleCheck = () => {
    onClick(item.key)
  }

  const classOfSpanText = item.done ? 'has-text-grey-light' : ""

  return (
    <label className="panel-block">
      <input type="checkbox" onChange={handleCheck} checked={item.done} />
      <span className={classOfSpanText}>
        {item.text}
      </span>
    </label>
  );
}

export default TodoItem;