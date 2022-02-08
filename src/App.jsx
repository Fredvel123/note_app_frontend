import React from 'react';
// components
import Home from './components/Home';
import SignUp from './components/SignUp';
// react router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index path='signup' element={<SignUp />} />
      </Routes>            
    </BrowserRouter>
  );
}

export default App;
