import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App(props) {
  const {isLoading, error} = props;
  return (
    <Router>
      
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
