import React from 'react';
// react router
import { Link } from 'react-router-dom';
// styled components
import { ErrorStyles } from '../../styles/error404';


function Error404() {
  return(
    <ErrorStyles>
      <h1>So Sorry, you don't have access here!</h1>
      <h3>please make <Link to='login'>LogIn</Link>  </h3>    
      <h3>or if you don't have an account, make <Link to='signup'>SingUp</Link>  </h3>    
    </ErrorStyles>
  )
}
export default Error404;