import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login'
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import {getCampaigns, addCampaign, updateCampaign, deleteCampaign} from './actions';
import './App.css';

function App(props) {
  const {isLoading, error, campaigns, isUpdating, getCampaigns, addCampaign, updateCampaign, deleteCampaign} = props;
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

const mapStateToProps = state =>
{
  return {
    isLoading: state.isLoading,
    error: state.error,
    campaigns: state.campaigns,
    isUpdating: state.isUpdating
  }
}

export default connect(mapStateToProps, {getCampaigns, addCampaign, updateCampaign, deleteCampaign})(App);
