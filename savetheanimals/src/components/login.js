import React, {useState} from 'react';
import axios from 'axios';

const Login = props => {
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

export default Login;