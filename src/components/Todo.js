import React from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function AddnewTodo(text) {
  console.log(text)
}

function Todo() {
	
	const [items, putItems, clearItems] = React.useState([
		/* テストコード 開始 */
		// { key: getKey(), text: '日本語の宿題', done: false },
		// { key: getKey(), text: 'reactを勉強する', done: false },
		// { key: getKey(), text: '明日の準備をする', done: false },
		/* テストコード 終了 */
	]);
	
	const [filter, setFilter] = React.useState('ALL');
	const displayItems = items.filter(item => {
		if (filter === 'ALL') return true;
		if (filter === 'TODO') return !item.done;
		if (filter === 'DONE') return item.done;
		
	});
	
	function handleSubmit(text) {
		putItems(items.concat({key: getKey(), text, done: false}));
		
	};
	function handleClick(checked) {
		const newItems = items.map(item => {
		if (item.key === checked.key) {
			item.done = !item.done;
		}
		return item;
		});
		putItems(newItems);
	};
	
	function handleFilterChange(value) {
		setFilter(value);
	}
	
	return (
		<div className="panel">
			<div className="panel-heading">
				ITSS ToDoアプリ
			</div>
			
			<Input onAdd={handleSubmit} />
			<Filter
				onChange={handleFilterChange}
				value={filter}
			/>
			
			{displayItems.map(item => (
			<TodoItem
				key={item.key}
				item={item}
				onCheck={handleClick}
			/>
			))}
			
			<div className="panel-block">
				<button className="button is-light is-fullwidth" onClick={clearItems}>
          全てのToDoを削除
        </button>
				{displayItems.length} items
			</div>
		</div>
	);
}

export default Todo;