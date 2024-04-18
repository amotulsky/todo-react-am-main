import React, { useState } from 'react';
import './Todo.css';

function NewTodo({ createNewTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      createNewTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <section className="todo-input-section">
      <input
        type="text"
        id="new-todo-text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={(event) => event.key === 'Enter' && handleAddClick(event)}
        placeholder="Add a new to do item..."
        aria-label="New todo"
      />
      <button onClick={handleAddClick} type="button">Add</button>
    </section>
  );
}

export default NewTodo;
