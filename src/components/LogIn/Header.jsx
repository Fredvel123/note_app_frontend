import React from 'react';
// styled components
import { HeaderStyles } from '../../styles/login/header'

function Header() {
  return (
    <HeaderStyles>
      <h2>Welcome Back!</h2>
      <h3>If you don't have an account, please Sign Up <a href="/signup">here!</a>  </h3>
    </HeaderStyles>
  )
}

export default Header