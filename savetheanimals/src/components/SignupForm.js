import React, {useState} from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

import './SignUp.css';

const SignupForm = props => {

console.log("!", props)

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const {history} = props;

    const handleChanges = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const register = event => {

        event.preventDefault();
        
        axios.post('', user).then(response => {
            console.log(response);
            // localStorage.setItem('token', );
            // history.push('/');
        });        
    }

    return (
        <div className='signup-form'>
            <div className='signup-formbox'>
        <form onSubmit={register}>
            <h1>Sign Up</h1>
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' name='name' placeholder='Full Name' onChange={handleChanges} value={user.name} />
            </div>

            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' name='email' placeholder='email@email.com' onChange={handleChanges} value={user.email} />
            </div>
            
            <div>
                <label htmlFor='password'>Password</label> 
                <input id='password' type='password' name='password' placeholder='password' onChange={handleChanges} value={user.password} />
            </div>
            
            <div>
                <button type='submit'>I'm an Organization</button>
            </div>

            <div>
                <button type='submit'>I'm a Supporter</button>
            </div>
        </form></div></div>
    )    
};

export default SignupForm;