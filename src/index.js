import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Pages/Login/login';
import HomePage from './components/Pages/Homepage/homepage';
import Dashboard from './components/Pages/Dashboard/dashboard';
import MenuItem from './components/Pages/MenuItem/menuitem';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
     <Route path='/' exact component={Login}/>
     <Route path='/home' exact component={HomePage}/>
     <Route path='/dashboard/:startup' exact component={Dashboard}/>
     <Route path='/dashboard/:startup/:menuitem' exact component={MenuItem}/>
  </BrowserRouter>
  ,document.getElementById('root'));
