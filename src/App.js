
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import React from 'react';
import LoginSignUp from './components/LoginSignup';
import Home from './components/Home';
import './App.css';
import Account from './components/account';
import { Navbar } from './components/navbar';
import Chatbot from './components/chatSystem';
import CostModelPage from './components/CostModelPage';
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/'e  exact index element={<Home/>}
      ></Route>
      <Route path='/Login'exact index element={<LoginSignUp/>}></Route>
      <Route path='/account' exact index element={<Account/>}></Route>
      <Route path='/chat' exact index element={<Chatbot/>}></Route>
      <Route path='/Cost' exact index element={<CostModelPage/>}></Route>
      </Routes> 

      </BrowserRouter>
      
    </div>
  );
}

export default App;
