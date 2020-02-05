import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';

import CampaignForm from './components/CampaignForm';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/register' component={SignupForm}/>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
        <PrivateRoute path='/add-campaign' component={CampaignForm}/>
        <Route exact path='/' component={LoginForm}/>
        <Route component={LoginForm}/>
      </Switch>
    </Router>
  );
}

export default App;
