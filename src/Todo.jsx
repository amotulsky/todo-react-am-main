import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import './Todo.css';
import React, { useState, useCallback } from 'react';

// Todo.jsx
import './Todo.css';

function Todo({ id, text, completed, deleteTodo, toggleComplete }) {
  // Remove tabIndex from the span if it's not necessary for it to be focusable
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`} onClick={() => toggleComplete(id)}>
      <span>{text}</span> {/* Removed tabIndex, span is not focusable anymore */}
      <button type="button" onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}





export default Todo;
