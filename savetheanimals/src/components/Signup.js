import React, { useState } from 'react';
import axios from 'axios';
import { setIsAdmin } from '../actions';
import {connect} from 'react-redux';

const Signup = props => 
{
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        organizationName: ''
    });

    const [isOrganization, setIsOrganization] = useState(false);

    const { history, setIsAdmin } = props;

    const handleChanges = event => 
    {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const registerAdmin = event => 
    {
        event.preventDefault();
        axios.post('https://save-the-animal-buildweek.herokuapp.com/api/auth/register', user)
            .then(response =>
            {
                setIsAdmin(true);
                history.push('/login');
            })
    }

    const registerSupporter = event =>
    {
        event.preventDefault()
        axios.post('https://save-the-animal-buildweek.herokuapp.com/api/auth/register', user)
        .then(response =>
        {
            history.push('/login');
        })
    }

    const handleClick = event => 
    {
        event.preventDefault();
        setIsOrganization(true);
    }

    return (
        <form>
            <div>
                <label htmlFor='name'>UserName </label>
                <input id='name' type='text' name='username' placeholder='username' onChange={handleChanges} value={user.username} />
            </div>

            <div>
                <label htmlFor='email'>Email </label>
                <input id='email' type='email' name='email' placeholder='email@email.com' onChange={handleChanges} value={user.email} />
            </div>

            <div>
                <label htmlFor='password'>Password </label>
                <input id='password' type='password' name='password' placeholder='password' onChange={handleChanges} value={user.password} />
            </div>

            <button onClick={handleClick}>I'm an Organization</button>
            {isOrganization && (
                <div>
                    <label htmlFor='organization'>Organization </label>
                    <input id='organizaton' type='text' name='organizationName' placeholder='organization name' onChange={handleChanges} value={user.organizationName} />
                    <button onClick={registerAdmin}>Submit</button>
                </div>
            )}
            <button onClick={registerSupporter}>I'm a Supporter</button>

        </form>
    )
};

export default Signup;