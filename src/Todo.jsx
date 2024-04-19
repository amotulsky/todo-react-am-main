import React from 'react';
import './Todo.css';

function Todo({ id, text, completed, deleteTodo, toggleComplete }) { 
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`} id={id}>
      <span
        tabIndex={0}
        onClick={() => toggleComplete(id)} 
        onKeyPress={(event) => event.key === 'Enter' && toggleComplete(id)}
      >
        {text}
      </span>
      <button type="button" onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}

export default Todo;