/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/index';
import { lengthAlltodo, lengthComplete, setLocalStorage } from './todoSlice';

function Futer() {
  const todolength = useSelector(lengthAlltodo);
  const todoComplete = useSelector(lengthComplete);
  const dispatch = useDispatch();
  return (
    <div className="toDoFuter">
      <span>
        {todoComplete}
        /
        {todolength}
        Complete
      </span>
      <button
        type="button"
        disabled={!todoComplete}
        onClick={() => {
          dispatch(setLocalStorage());
        }}
      >
        clear Complete
      </button>
    </div>
  );
}

export default Futer;
