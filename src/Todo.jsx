import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import './Todo.css';
import React, { useState, useCallback } from 'react';

// Todo.jsx
function Todo({ id, text, completed, deleteTodo, toggleComplete }) {
  // Function to handle key presses for completion toggling
  const handleKeyPressOnTodo = (event) => {
    if (event.key === 'Enter') {
      toggleComplete(id); // Toggle completion on Enter key
    }
  };

  return (
    <li tabIndex={0} className={`todo-item ${completed ? 'completed' : ''}`}>
      {/* Make text focusable and toggle completion on Enter key */}
      <span  onClick={() => toggleComplete(id)} onKeyPress={handleKeyPressOnTodo}>
        {text}
      </span>
      {/* Delete button naturally included in tab order */}
      <button tabIndex={0} type="button" onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}

export default Todo;
