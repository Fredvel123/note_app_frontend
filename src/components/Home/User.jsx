import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


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
    <div>
      {user ?
        <div>
          <h4>{user.name}</h4>
          <h4>{user.email}</h4>
        </div>
        : null}
    </div>
  )
}

export default User;