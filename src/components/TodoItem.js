/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem( {text} ) {
  return (
    <label className="panel-block">
      <input type='checkbox'/>
      {text}
    </label>
  );
}

export default TodoItem;