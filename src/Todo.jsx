import React from 'react';
import './Todo.css';

function Todo({ id, text, completed, handleDelete, handleComplete }) {
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`} id={id}>
      <span
        tabIndex={0} // Make text focusable
        onClick={() => handleComplete({ target: { parentElement: { id } } })}
        onKeyPress={(event) => event.key === 'Enter' && handleComplete({ target: { parentElement: { id } } })}
      >
        {text}
      </span>
      <button type="button" onClick={() => handleDelete({ target: { parentElement: { id } } })}>Delete</button>
    </li>
  );
}

export default Todo;
