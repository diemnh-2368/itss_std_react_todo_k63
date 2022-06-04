import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({ data, setData }) {

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setData(e.target.value)
      e.target.value = ''
    }
  }

  return (
    <div className="panel-block">
      <input placeholder='ToDoを入力してください' className='input' type="text" onKeyDown={(e) => handleKeyDown(e)}/>
    </div>
  );
}

export default Input;
