import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import './Todo.css';
import React, { useState, useCallback } from 'react';

// Todo.jsx
import './Todo.css';

function Todo({ id, text, completed, deleteTodo, toggleComplete }) {
  // tabIndex={0} makes an element focusable and part of the natural tab order
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <span tabIndex={0} onClick={() => toggleComplete(id)} onKeyPress={(e) => e.key === 'Enter' && toggleComplete(id)}>
        {text}
      </span>
      <button tabIndex={0} type="button" onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
}


export default Todo;
