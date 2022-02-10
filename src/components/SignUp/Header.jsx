import React from 'react'
// styled components
import { HeaderStyles, IconMain } from '../../styles/signup/index';

function Header() {
  return (
    <HeaderStyles >
      <div className='icon' >
        <IconMain />
        <h2>Notes App</h2>
      </div>
      <a href="/" rel="noreferrer" >Home</a>
      <a href="/login" rel="noreferrer" >Log In</a>
    </HeaderStyles>
  )
}

export default Header;