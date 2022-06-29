import { useState } from "react";

/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({ option, setOption }) {
  
  const handleChangeOption = (newOption) => {
    setOption(newOption)
  }

  return (
    <div className="panel-tabs">
      <div className="tabs is-centered">
        <ul>
          <li className={option === 0? "is-active": ""} onClick={() => handleChangeOption(0)}><a>全て</a></li>
          <li className={option === 1? "is-active": ""} onClick={() => handleChangeOption(1)}><a>未完了</a></li>
          <li className={option === 2? "is-active": ""} onClick={() => handleChangeOption(2)}><a>完了済み</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Filter