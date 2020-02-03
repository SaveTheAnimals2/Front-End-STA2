import React from 'react';
import {connect} from 'react-redux';
import './App.css';

function App() {
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
