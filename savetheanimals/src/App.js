import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login'
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/register' component={Signup}/>
        <PrivateRoute path = '/dashboard' component={Dashboard}/>
        <Route exact path='/' component={Login}/>
        <Route component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
