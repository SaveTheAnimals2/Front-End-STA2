import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const LoginForm = props => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const { history } = props;

    const handleChange = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const login = event => {
        event.preventDefault();
        axios.post('https://save-the-animal-buildweek.herokuapp.com/api/auth/login', user)
            .then(response => {
                localStorage.setItem('token', response.data.getToken);
                history.push('/dashboard');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='login-form'>
            <form onSubmit={login}>
                <h2>Welcome Back!</h2>
                <div>
                    <label htmlFor='name'>Username </label>
                    <input id='name' type='text' name='username' placeholder='username' onChange={handleChange} value={user.username} />
                </div>
                <div>
                    <label htmlFor='password'>Password </label>
                    <input id='password' type='password' name='password' placeholder='password' onChange={handleChange} value={user.password} />
                </div>
                <button className='login-button' type='login'>Login</button>

                <div>
                    New User? Sign up <Link to='/sign-up'>here</Link>!
                </div>
            </form>
        </div>

    )
};

export default LoginForm;
