import React from 'react';
// components
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<LogIn />} />
      </Routes>            
    </BrowserRouter>
  );
}

export default App;
