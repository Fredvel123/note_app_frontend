import React, { useEffect, useState } from 'react'
// styled components
import { FormsStyles, Input } from '../../styles/login/forms';
// icons
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { setAuth }  from '../../redux/slices/auth';
// react router
import { useNavigate } from 'react-router-dom';


function Forms() {
  // re4ux
  const auth = useSelector(state => state.auth.value);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwd, setPasswd] = useState(false);
  
  const changePasswd = () => {
    setPasswd(!passwd);
  }
  // 
  const handlerEmailChange = e => {
    const value = e.target.value;
    setEmail(value);
  }
  const handlerPasswdChange = e => {
    const value = e.target.value;
    setPassword(value);
  }
  const LogInUserInServer = async () => {
    const user = await fetch('https://notes-app-fredd.herokuapp.com/api/users/login', {
      method: 'POST',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    const res = await user.json();
    dispatch(setAuth(res));
  }
  const navigate = useNavigate();

  const navigateToHome = async () => {
    const res = await auth.auth;
    if(res === true) {
      navigate("/", { replace: true })
    }
  }
  const handlerSubmit = e => {
    e.preventDefault();
    LogInUserInServer();
  }
  useEffect(() => {
    navigateToHome();
  }, [handlerSubmit])
  
  return (
    <FormsStyles onSubmit={handlerSubmit} >
      <Input 
        type="email"
        placeholder='Write your email here'
        onChange={handlerEmailChange}
        required
      />
      <div className='passwd' > 
        <Input
          type={passwd ? 'text': 'password' }
          placeholder='write your password here'
          onChange={handlerPasswdChange}
          required
        />
        {!passwd ? 
          <EyeInvisibleOutlined className='icon' onClick={changePasswd}  />
        : <EyeOutlined className='icon' onClick={changePasswd}  />  }
        
      </div>
      <button>Log In</button>
      {auth ?
        <h3>{auth.message}</h3>
      : null  }
    </FormsStyles>
  )
}

export default Forms;