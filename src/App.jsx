import React, { useState, useEffect } from 'react';
import './App.css';
import NewTodo from './NewTodo';
import Todo from './Todo';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [sortField, setSortField] = useState('text');
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = () => {
        fetch('https://cse204.work/todos', {
            headers: {
                'x-api-key': '3d53e1-902fd7-7ea452-7ea477-0cb5aa'
            }
        })
        .then(response => response.json())
        .then(data => setTodos(data))
        .catch(error => console.error('Error fetching todos:', error));
    };

    const addTodo = (todoText) => {
        fetch('https://cse204.work/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '3d53e1-902fd7-7ea452-7ea477-0cb5aa'
            },
            body: JSON.stringify({ text: todoText })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(() => {
            fetchTodos(); // Refetch the todos after adding
        })
        .catch(error => console.error('Error adding todo:', error));
    };

    const deleteTodo = (todoId) => {
        fetch(`https://cse204.work/todos/${todoId}`, {
            method: 'DELETE',
            headers: {
                'x-api-key': '3d53e1-902fd7-7ea452-7ea477-0cb5aa'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            fetchTodos(); // Refetch the todos after deleting
        })
        .catch(error => console.error('Error deleting todo:', error));
    };

    const toggleComplete = (todoId) => {
        const todoToToggle = todos.find(todo => todo.id === todoId);
        fetch(`https://cse204.work/todos/${todoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '3d53e1-902fd7-7ea452-7ea477-0cb5aa'
            },
            body: JSON.stringify({ completed: !todoToToggle.completed })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            fetchTodos(); // Refetch the todos after toggling completion
        })
        .catch(error => console.error('Error toggling todo completion:', error));
    };

    const handleSort = (field, order) => {
        setSortField(field);
        setSortOrder(order);
    };

    const getSortedTodos = () => {
        const sortedTodos = [...todos].sort((a, b) => {
            if (sortField === 'text') {
                return sortOrder === 'asc'
                    ? a.text.localeCompare(b.text)
                    : b.text.localeCompare(a.text);
            }
            if (sortField === 'created') {
                return sortOrder === 'asc'
                    ? new Date(a.created) - new Date(b.created)
                    : new Date(b.created) - new Date(a.created);
            }
            if (sortField === 'completed') {
                return sortOrder === 'asc'
                    ? Number(a.completed) - Number(b.completed)
                    : Number(b.completed) - Number(a.completed);
            }
            return 0;
        });
        return sortedTodos;
    };

    return (
        <div className="app">
            <header>
                <h1>ToDo App</h1>
            </header>
            <main>
                <section className="sort-controls">
                    <button onClick={() => handleSort('text', 'asc')}>Alphabetically Asc</button>
                    <button onClick={() => handleSort('text', 'desc')}>Alphabetically Desc</button>
                    <button onClick={() => handleSort('created', 'asc')}>Date Created Asc</button>
                    <button onClick={() => handleSort('created', 'desc')}>Date Created Desc</button>
                    <button onClick={() => handleSort('completed', 'asc')}>Status Completed Asc</button>
                    <button onClick={() => handleSort('completed', 'desc')}>Status Completed Desc</button>
                </section>
                <NewTodo addTodo={addTodo} />
                <section className="todo-list-section">
                    <ul id="todoList">
                        {getSortedTodos().map((todo) => (
                            <Todo
                                key={todo.id}
                                id={todo.id}
                                text={todo.text}
                                completed={todo.completed}
                                deleteTodo={deleteTodo}
                                toggleComplete={toggleComplete}
                            />
                        ))}
                    </ul>
                </section>
            </main>
            <footer>
                <p>ToDo App TM</p>
            </footer>
        </div>
    );
};

export default App;
