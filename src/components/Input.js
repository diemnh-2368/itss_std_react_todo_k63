import { useState } from 'react';

function Input( { onAdd } ) {
  const [todoName, setTodoName] = useState('');

  const handleChange = e => setTodoName(e.target.value);

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      onAdd(todoName);
      setTodoName('');
    }
  };

  return (
    <div className="panel-block">
      <input
        class="input"
        type="text"
        placeholder="Todoを入力してください"
        value={todoName}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Input;