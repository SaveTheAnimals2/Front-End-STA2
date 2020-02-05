import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';
// import CampaignForm from './components/CampaignForm';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <PrivateRoute path='/dashboard' component={Dashboard}/>
          <Route exact path='/' component={LoginForm}/>
          <Route exact path='/sign-up' component={SignupForm}/>
          {/* <Route component={Login}/> */}
          {/* <Route path='/campaign-form' component={CampaignForm}/> */}
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
