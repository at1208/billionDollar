import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Pages/Login/login';
import HomePage from './components/Pages/Homepage/homepage'
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
     <Route path='/' exact component={Login}/>
     <Route path='/home' exact component={HomePage}/>
  </BrowserRouter>
  ,document.getElementById('root'));
