import React from 'react';
import {
   BrowserRouter as Router,
   Route,
   Switch,
} from 'react-router-dom'

import {createGlobalStyle} from 'styled-components'

import './App.css';

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Crud from './components/Crud/Crud'

import Users from './components/Users';
import User from './components/User';

import Navegation from './components/Menu/Navegation'

const GlobalStyle = createGlobalStyle`
    body{
        font-family:'Lucida Sans',sans-serif;
        text-align: center;
    }
`;


function App() {
   return (
      <>
         <Router>
            <GlobalStyle />
            <Navegation />
            <Switch>
               <Route exact path='/' component={Login} />
               <Route path='/home' component={Home} />
               <Route path='/crud' component={Crud} />
               <Route exact path="/usuario" component={Users} />
               <Route path="/user" component={User} />
            </Switch>
         </Router>
      </>
   );
}

export default App;
