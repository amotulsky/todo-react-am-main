import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import './Todo.css';
import React, { useState, useCallback } from 'react';

// Todo.jsx
import './Todo.css';

function Todo({ id, text, completed, deleteTodo, toggleComplete }) {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`} onClick={() => toggleComplete(id)}>
      {/* Remove tabIndex if you do not need the text itself to be focusable */}
      <span>{text}</span>
      {/* Button will be focused after the text since it's interactive */}
      <button type="button" onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
}



export default Todo;
