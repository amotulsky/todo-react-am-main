import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import './Todo.css';
import React, { useState, useCallback } from 'react';

// Todo.jsx
function Todo({ id, text, completed, deleteTodo }) {
  // Renders the todo text and a delete button.
  // Clicking the delete button will call the deleteTodo function passed as a prop.
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      {/* Make the text focusable with tabIndex */}
      <span tabIndex="0" onClick={() => deleteTodo(id)} onKeyPress={(e) => {
        if (e.key === 'Enter') deleteTodo(id); // Allows deletion with Enter key when focused
      }}>
        {text}
      </span>
      <button type="button" onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}

export default Todo;