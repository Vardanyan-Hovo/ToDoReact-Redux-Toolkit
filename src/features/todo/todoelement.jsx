/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deletetodoelement, isCompletecheng } from './todoSlice';
import './todo.css';

function Todoelement({ elementbyTodo }) {
  const dispatch = useDispatch();

  return (
    <div className="toDoAny">
      <input
        type="checkbox"
        onChange={() => {
          dispatch(isCompletecheng(elementbyTodo));
        }}
      />
      <span>{elementbyTodo.title}</span>
      <button
        type="button"
        onClick={() => {
          dispatch(deletetodoelement(elementbyTodo));
        }}
      >
        X
      </button>
    </div>
  );
}
Todoelement.propTypes = {
  elementbyTodo: PropTypes.shape({
    title: PropTypes.string,
  }),
};

Todoelement.defaultProps = {
  elementbyTodo: { title: 'not because there is nothing' },
};

export default Todoelement;
