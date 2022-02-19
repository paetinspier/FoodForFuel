import React from 'react';
import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route exact path='/Dashboard' element={<Dashboard/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

