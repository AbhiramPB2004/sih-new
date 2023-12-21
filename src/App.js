import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';
import LoginSignUp from './components/LoginSignup';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
      <Route path='/'e  exact index element={<Home/>}
      ></Route>
      <Route path='/Login'exact index element={<LoginSignUp/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
