import React from 'react'
// styled components
import { Inputs } from '../../styles/signup/signuppage';

function SignUpPage() {
  return (
    <Inputs>
      <div className='header'>
        <h3 className='capitalize' >Start for free</h3>
        <h2>Create a New Account.</h2>
        <h3>You already have an account ? <a href="https://www.google.com" target='_blank' >Log In</a>  </h3>
      </div>
    </Inputs>
  )
}

export default SignUpPage;