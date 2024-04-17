import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import wustlLogo from './assets/wustl.svg'
import './App.css'
import NewTodo from './NewTodo'
import Todo from './Todo';
import React, { useState, useEffect } from 'react';


const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Initial fetch of todos from the API
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
    .catch(error => console.error('Error:', error));
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
  .catch(error => console.error('Error:', error));
}

// application is completed. 

  const deleteTodo = (todoId) => {
    fetch(`https://cse204.work/todos/${todoId}`, {
      method: 'DELETE',
      headers: {
        'x-api-key': '3d53e1-902fd7-7ea452-7ea477-0cb5aa' // Replace with your actual API key
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchTodos(); // Refetch the todos after deleting
    })
    .catch(error => console.error('Error:', error));
  };

  const toggleComplete = (todoId) => {
    const todo = todos.find(t => t.id === todoId);
    const newStatus = !todo.completed;
  
    fetch(`https://cse204.work/todos/${todoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '3d53e1-902fd7-7ea452-7ea477-0cb5aa' // Replace with your actual API key
      },
      body: JSON.stringify({ completed: newStatus })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchTodos(); // Refetch the todos after toggling completion
    })
    .catch(error => console.error('Error:', error));
  };


  // Add sorting functionality as needed

  return (
    <div className="app">
      <header>
        <h1>ToDo App</h1>
      </header>
      <main>
        <NewTodo addTodo={addTodo} />
        <section className="todo-list-section">
          <ul id="todoList">
            {todos.map(todo => (
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