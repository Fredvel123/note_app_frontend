import React from 'react';
// styled components
import { Inputs, Label } from '../../styles/addTasks';

function Input({ placeholder, title, state, setState }) {
  const handlerChange = e => {
    setState(e.target.value);
  }
 
  return (
    <>
      <Label htmlFor={title}>
        <span>{title}:</span>
        <Inputs
          id={title}
          type="text"
          required
          placeholder={placeholder}
          onChange={handlerChange}
          />
      </Label>
    </>
  )
}

export default Input;