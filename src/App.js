import React from 'react';
import Todo from './features/todo/todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>To Do</h1>
      <Todo />
    </div>
  );
}
// "rules": {
//   "react/jsx-filename-extension": [1, { "allow": "as-needed" }]
// }
export default App;
