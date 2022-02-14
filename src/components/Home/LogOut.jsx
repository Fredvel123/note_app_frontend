import React from 'react'
// redux
import { useDispatch } from 'react-redux'
import { setAuth } from '../../redux/slices/auth';

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
      <button onClick={logOut}  >
        Log Out
      </button>
    </>
  )
}

export default LogOut