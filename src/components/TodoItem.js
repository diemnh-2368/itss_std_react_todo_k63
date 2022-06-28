/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
const handlerClick = (e) => {
  e.target.classList.toggle('has-text-gray-light')
}

function TodoItem({item}) {
  return (
    <label className="panel-block" onClick={(e)=>handlerClick(e)}>
      <input type="checkbox" />
      {item.text}
    </label>
  );
}

export default TodoItem;
