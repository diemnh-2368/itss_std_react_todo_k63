/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({item, onCheck }  ) {
function handleClick() {
        onCheck(item);
    }

    return (
        <label className="panel-block">
            <input
                type="checkbox"
                defaultChecked={item.done}
                onClick={handleClick}
            />
            <div className={item.done ? "has-text-grey-light" : ""}>{item.text}</div>
        </label>
    );
}

export default TodoItem;