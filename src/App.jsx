import React, { useEffect } from 'react';
// components
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Error404 from './components/Error404';
import AddTasks from './components/AddTasks';
// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from './redux/slices/auth';

function App() {
  // local storage data
  const auth = useSelector(state => state.auth.value);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = localStorage.getItem('auth');
    if(data !== null) {
      dispatch(setAuth(JSON.parse(data)));
    }
  }, [dispatch])
  useEffect(() => {
    localStorage.setItem('auth', JSON.stringify(auth))
  }, [auth])
  

  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={auth.auth ? <Home /> : <Error404 /> } />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<LogIn />} />
        <Route path='add' element={auth.auth ?  <AddTasks /> :<Error404 /> } />
      </Routes>            
    </BrowserRouter>
  );
}

export default App;
