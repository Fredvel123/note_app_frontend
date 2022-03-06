import React from 'react'
// components
import User from './User';
import Notes from './Notes';

function Home() {
  return (
    <div>
      <User />
      {/* <LogOut /> */}
      <Notes />
    </div>
  )
}

export default Home