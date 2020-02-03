import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import PrivateRoute from './componets/PrivateRoute';
import './App.css';

function App(props) {
  const {isLoading, error} = props;
  return (
    <Router>
      <Switch>
        {/* <Route exact path = '/' component={Login}/> */}
        {/* <PrivateRoute path = '' component={}/> */}
      </Switch>
    </Router>
  );
}

const mapStateToProps = state =>
{
  return {
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, {})(App);
