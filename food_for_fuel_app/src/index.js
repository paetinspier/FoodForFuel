import React from 'react';
import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';



const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route exact path='/Dashboard' element={<Dashboard/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);