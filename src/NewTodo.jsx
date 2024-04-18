import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import './Todo.css';
import React, { useState } from 'react';

function NewTodo({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const handleAddClick = useCallback(() => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue(''); // Clear the input field after adding
    }
  }, [addTodo, inputValue]);

  // Optionally, handle the Enter key to add a todo
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      handleAddClick();
    }
  }, [handleAddClick]);

  return (
    <section className="todo-input-section">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // Optional: Adds todo when Enter key is pressed
        placeholder="Add a new to do item..."
        aria-label="New todo"
      />
      <button
        onClick={handleAddClick}
        type="button">
        Add
      </button>
    </section>
  );
}

export default NewTodo;
