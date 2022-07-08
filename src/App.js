import React from 'react';
import { Todo }  from './features/todo/todo.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>To Do</h1>
      <Todo />
    </div>
  );
}

export default App;
