import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login'
import Signup from './components/Signup';
import './App.css';

function App(props) {
  const {isLoading, error, campaigns, isUpdating} = props;
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/register' component={Signup}/>
        <Route component={Login}/>
        {/* <PrivateRoute path = '' component={}/> */}
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

export default connect(mapStateToProps, {})(App);
