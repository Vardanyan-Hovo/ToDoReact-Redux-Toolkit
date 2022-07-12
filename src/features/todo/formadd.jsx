/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from './todoSlice';

function Formadd() {
  const dispatch = useDispatch();
  const [vol, setVol] = useState('');
  return (
    <form
      className="Formclass"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addtodo(vol));
        setVol('');
      }}
    >
      <input
        type="text"
        value={vol}
        onChange={(e) => {
          if (e.target.value !== undefined) {
            setVol(e.target.value);
          }
        }}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

export default Formadd;
