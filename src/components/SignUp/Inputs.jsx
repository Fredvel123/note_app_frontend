import React, { Fragment } from 'react';
// styled components
import { Label } from '../../styles/signup/form';

function Inputs({ title, type, state, setState, regExpression, pHolder, callback }) {
  const handlerChange = e => {
    const value = e.target.value;
    setState({...state, value: value})
  }
 
  const validationInputs = () => {
    if(regExpression) {
      if(regExpression.test(state.value)){
        setState({...state, isValid: true})
      }else {
        setState({...state, isValid: false})
      }
    }
    if(callback) {
      callback();
    }
  }
  
  return(
    <Fragment>
      <Label htmlFor={title} state={state.isValid}  >
        <span>{title} :</span>
        <input 
          id={title}
          type={type}
          placeholder={pHolder}
          onChange={handlerChange}
          onKeyUp={validationInputs}
          onBlur={validationInputs} />
      </Label>
    </Fragment>
  )
}

export default Inputs;