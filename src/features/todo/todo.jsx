/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector } from 'react-redux';
import Todoelement from './todoelement';
import Formadd from './formadd';
import Futer from './Futer';
import './todo.css';
import { selecttodoall } from './todoSlice';

function Todo() {
  const todoall = useSelector(selecttodoall);
  return (
    <div className="todo">
      <Formadd />
      {
      todoall.map((element) => {
        const res = <Todoelement elementbyTodo={element} key={element.id} />;
        return res;
      })
      }
      <Futer />
    </div>
  );
}

export default Todo;
