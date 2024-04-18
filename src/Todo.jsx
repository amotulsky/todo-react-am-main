import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import './Todo.css';
import React, { useState, useCallback } from 'react';

// Todo.jsx
import './Todo.css';

function Todo({ id, text, completed, deleteTodo, toggleComplete }) {
  // Assuming toggleComplete is meant to be triggered on clicking the todo text
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(id)}>{text}</span>
      <button type="button" onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}




export default Todo;
