import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import './Todo.css';
import React, { useState, useCallback } from 'react';

// Todo.jsx
function Todo({ id, text, completed, deleteTodo, toggleComplete }) {
  // Just render the text and delete button without setting tabIndex.
  // Clicking on the text or pressing Enter when focused will toggle completion.
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(id)} onKeyPress={(e) => e.key === 'Enter' && toggleComplete(id)}>
        {text}
      </span>
      {/* The delete button is focusable by default, no need for tabIndex */}
      <button type="button" onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}





export default Todo;
