import React from 'react';


function TabTodo({ tabData, changeAfterClick }) {
    const { text, key, focus } = tabData
    const colorUsing = focus ? "black" : "#2366d1"
    return (
        <div class="column is-half">
            <p class="bd-notification is-primary" style={{ color: colorUsing }} onClick={() => {
                changeAfterClick(key)
            }} >{text}
            </p>
        </div>
    )
}
export default TabTodo;