import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
import CampaignForm from './components/CampaignForm';
import UpdateCampaignForm from './components/UpdateCampaignForm';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/sign-up' component={SignupForm}/>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
        <PrivateRoute path='/add-campaign' component={CampaignForm}/>
        <PrivateRoute path='/update-campaign/:id' component={UpdateCampaignForm}/>>
        <Route exact path='/' component={LoginForm}/>
        <Route component={LoginForm}/>
      </Switch>
    </Router>
  );
}

export default App;
