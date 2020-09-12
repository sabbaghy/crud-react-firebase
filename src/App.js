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
import Navegation from './components/Menu/Navegation'

const GlobalStyle = createGlobalStyle`
   body{
      margin:0;
   }
`

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
            </Switch>
         </Router>
      </>
   );
}

export default App;
