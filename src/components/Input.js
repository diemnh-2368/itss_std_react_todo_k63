import React from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({ onAdd }) {
    const [state, setState] = React.useState({})

    function handleChange(event) {
        setState( event.target.value )
    }

    function handleSubmit(event) {
        onAdd(state);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="panel-block">
                <input
                    className="input"
                    type="text"
                    placeholder="Todoを入力してください"
                    onChange={handleChange}
                />
            </div>
        </form>

    );
}

export default Input;
