import React from 'react';
import {connect} from 'react-redux';
import './App.css';

function App(props) {
  const {isLoading, error} = props;
  return (
    <div className="App">
     
    </div>
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
