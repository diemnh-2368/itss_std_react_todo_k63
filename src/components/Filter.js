import React, { useState } from 'react';
/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({ onFilterClick }) {
  const [filterElements, setFilter] = useState([
    { id: 1, text: '全て', isActive: true },
    { id: 2, text: '未完了', isActive: false },
    { id: 3, text: '完了済み', isActive: false },
  ])

  const handleFilter = (element) => {
    let newItems = [];
    
    for (const item of filterElements) {
      if (item.id === element.id) {
        item.isActive = true;
      }
      else {
        item.isActive = false;
      }
      newItems.push(item);
      console.log(item.id)
    }
    
    setFilter(newItems);
    onFilterClick(element);
  }

  return (
    <div className="panel-tabs">
    {
      filterElements.map((element,key) => (
        <a 
          href='#'
          key={key}
          onClick={() => handleFilter(element)}
          className={element.isActive ? 'is-active' : ''}
        >
          {element.text}
        </a>
      ))
    }
    </div>
  );
}

export default Filter