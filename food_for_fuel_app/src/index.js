import React from 'react';
import './index.css';
import App from './App';
import HomePage from './HomePage';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App/>}/>
      <Route exact path='/HomePage' element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
);

