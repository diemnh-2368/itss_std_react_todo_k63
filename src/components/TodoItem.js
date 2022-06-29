import { useState } from "react"

/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
function TodoItem({ item, data, setData }) {
  const [styled, setStyle] = useState(item.done)

  const changeStyle = () => {
    let newData = []
    data.forEach(e => {
      let newElement = e
      if (e.key === item.key) {
        newElement.done = !newElement.done
      }
      newData.push(newElement)
    });
    setData(newData)
    setStyle(!styled)
  }

  return (
    <label className={(styled? "has-text-grey-light": "") + " panel-block"} >
      <input defaultChecked={styled} type="checkbox" onChange={() => changeStyle()} />
      {item.text}
    </label>
  );
}

export default TodoItem;