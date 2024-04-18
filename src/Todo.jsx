import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import './Todo.css';
import React, { useState, useCallback } from 'react';

// Todo.jsx
import './Todo.css';

function Todo({ id, text, completed, deleteTodo, toggleComplete }) {
    return (
        <li
            tabIndex={0}
            className={`todo-item ${completed ? 'completed' : ''}`}
            onClick={() => toggleComplete(id)}
        >
            {text}
            <button type="button" onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    );
}

export default Todo;
