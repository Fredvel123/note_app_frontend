import React from 'react';
// styled components
import { SignUpStyles } from '../../styles/signup/index';
// components
import Header from './Header';
import SignUpPage from './SignUpPage';
import Forms from './Forms';
// import Response from './Response';

function SignUp() {
  return(
    <SignUpStyles >
      <Header />      
      <SignUpPage />
      <Forms />
    </SignUpStyles>
  )
}

export default SignUp;