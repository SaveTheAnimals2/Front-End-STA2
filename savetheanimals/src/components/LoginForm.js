import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Signup from './SignupForm';

import axios from 'axios';

const LoginForm = props => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const {history} = props;

    const handleChange = event =>
    {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const login = event =>
    {
        event.preventDefault();
        axios.post('', user)
        .then(response =>
        {
            console.log(response);
            // localStorage.setItem('token', );
            // history.push('/dashboard');
        })
        .catch(error => 
        {
            console.log(error);
        })
    }

    return (
        <div className='login-form'>
            <form onSubmit={login}>
            <h1>Save the Animals</h1>
                <div>
                <label htmlFor='name'>Username </label>
                <input id='name' type='text' name='username' placeholder='Full Name' onChange={handleChange} value={user.username}/>
                </div>
                <div>
                <label htmlFor='password'>Password </label> 
                <input id='password' type='password' name='password' placeholder='Full Name' onChange={handleChange} value={user.password}/>
                </div>
                <button type='login'>Login</button>

                <div>
                New User? Sign up <Link to='/sign-up'>here</Link>!
                </div>
            </form>

     <Router>
        <Switch>
          <Route exact path='/sign-up'>
              <Signup component= {Signup} />
              </Route>
         
        </Switch>
     </Router>

        </div>
        
    )
};

export default LoginForm;