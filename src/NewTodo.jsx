import React, { useState } from 'react';
import './Todo.css';  // Make sure the CSS file is properly linked

function NewTodo({ addTodo }) { // Updated prop name to match App.jsx
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue); // Call addTodo, passed from App.jsx
      setInputValue('');
    }
  };

  return (
    <section className="todo-input-section">
      <div className="input-group">  {/* Adding the flex container */}
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
      </div>
    </section>
  );
}

export default NewTodo;
