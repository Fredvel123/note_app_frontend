import React, { useEffect, useState } from 'react'
// react redux
import { useSelector } from 'react-redux';
// router
import { Link } from 'react-router-dom';
// styled components
import { AddTaskButton, UserStyled } from '../../styles/Home/user';
// components
import LogOut from './LogOut';


function User() {
  // get Info for user.
  const auth = useSelector(state => state.auth.value);
  const [user, setuser] = useState({});
  const getUserInfo = async () => {
    const link = 'https://notes-app-fredd.herokuapp.com/api/users/info';
    const user = await fetch(link, {
      headers: {
        'access-token': auth.token
      }
    })
    const res = await user.json();
    setuser(res);
  }
  useEffect(() => {
    getUserInfo();
  }, [] )

  return (
    <>
      {user ?
        <UserStyled>
          <h4>{user.name}</h4>
          <div className='buttons' >
            <Link to="/add" >
               <AddTaskButton />
            </Link>
            <LogOut />
          </div>
        </UserStyled>
        : null}
    </>
  )
}

export default User;