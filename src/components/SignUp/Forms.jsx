import React, { useState } from 'react'
// styled components
import { FormStyles } from '../../styles/signup/form';
// components
import Inputs from './Inputs';

function Forms() {
  const [name, setName] = useState({value: '', isValid: null})
  const [email, setEmail] = useState({value: '', isValid: null})
  const [password, setPassword] = useState({value: '', isValid: null})
  const [validPasswd, setValidPasswd] = useState({value: '', isValid: null})

  // onsubmit
  const handlerSubmit = e => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(validPasswd);
  }

  const regularExpressions = {
    user: /^[a-zA-Z0-9]{4,16}$/, // Letras, numeros, guion y guion_bajo
    link:  /^(ftp|http|https):\/\/[^ "]+$/, // para validar links
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/ // 7 a 14 numeros.
  }  

  const validationPasswd = () => {
    if(password.value.length > 0 ) {
      if(password.value === validPasswd.value) {
        setValidPasswd({...validPasswd, isValid: true})
      }else {
        setValidPasswd({...validPasswd, isValid: false})
      }
    }
  }

  return (
    <FormStyles onSubmit={handlerSubmit} >
      <Inputs 
        title='name'
        type='text'
        state={name}
        setState={setName}
        pHolder='Frank Castle'
        regExpression={regularExpressions.name} />
      <Inputs 
        title='email'
        type='email'
        state={email}
        setState={setEmail}
        pHolder='frank_castle@gmail.com'
        regExpression={regularExpressions.email} />
      <div className='password' >
        <Inputs
          title='password'
          type='password'
          state={password}
          setState={setPassword}
          pHolder='write your password'
          regExpression={regularExpressions.password} />
        <Inputs
          title='repeate password'
          type='password'
          state={validPasswd}
          setState={setValidPasswd}
          pHolder='write your password again'
          callback={validationPasswd} />
      </div>
      <button>Create account</button>
    </FormStyles>
  )
}

export default Forms;