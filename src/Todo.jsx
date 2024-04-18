import React from 'react';
import './Todo.css';

function Todo({ id, text, completed, deleteTodo, toggleComplete }) { // Correct prop names
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`} id={id}>
      <span
        tabIndex={0} // Make text focusable
        onClick={() => toggleComplete(id)} // Simplified call for toggleComplete
        onKeyPress={(event) => event.key === 'Enter' && toggleComplete(id)}
      >
        {text}
      </span>
      <button type="button" onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}

export default Todo;
