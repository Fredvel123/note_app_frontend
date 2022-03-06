import React from 'react'
// redux
import { useDispatch } from 'react-redux'
import { setAuth } from '../../redux/slices/auth';
import { LogOutButton, LogOutIcon } from '../../styles/Home/user';

function LogOut() {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setAuth({
      auth: false,
      message: 'user is not exist',
      token: ''
    }))
  }

  return (
    <>
      <LogOutButton onClick={logOut}  >
        <LogOutIcon />
      </LogOutButton>
    </>
  )
}

export default LogOut