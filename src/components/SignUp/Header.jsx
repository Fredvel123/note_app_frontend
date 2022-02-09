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
      <a href="https://www.google.com" target='_blank' rel="noreferrer" >Home</a>
      <a href="https://www.google.com" target='_blank' rel="noreferrer" >Log In</a>
    </HeaderStyles>
  )
}

export default Header;