import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import './Todo.css';

// NewTodo.jsx
import React, { useState, useCallback } from 'react';


function NewTodo({ addTodo }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = useCallback((e) => {
        setInputValue(e.target.value);
    }, []);

    const handleAddClick = useCallback(() => {
        if (inputValue.trim()) {
            addTodo(inputValue);
            setInputValue('');
        }
    }, [addTodo, inputValue]);

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
                onKeyPress={handleKeyPress}
                placeholder="Add a new to do item..."
                aria-label="New todo"
            />
            <button onClick={handleAddClick} type="button">Add</button>
        </section>
    );
}

export default NewTodo;
