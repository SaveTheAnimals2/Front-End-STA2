import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUsername} from '../actions'

const Login = props => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const {history, setUsername} = props;

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
        axios.post('https://save-the-animal-buildweek.herokuapp.com/api/auth/login', user)
        .then(response =>
        {
            localStorage.setItem('token', response.data.getToken);
            setUsername(user.username);
            history.push('/dashboard');
        })
        .catch(error => 
        {
            console.log(error);
        })
    }

    return (
        <form onSubmit={login}>
            <div>
                <label htmlFor='name'>Username </label>
                <input id='name' type='text' name='username' placeholder='Full Name' onChange={handleChange} value={user.username}/>
            </div>
            
            <div>
                <label htmlFor='password'>Password </label> 
                <input id='password' type='password' name='password' placeholder='Full Name' onChange={handleChange} value={user.password}/>
            </div>

            <button type='login'>Login</button>

        </form>
    )
};

const mapStateToProps = state =>
{
    return{
        state
    }
}

export default connect(mapStateToProps, {setUsername})(Login);
