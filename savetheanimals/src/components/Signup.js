import React, {useState} from 'react';
import axios from 'axios';

const Signup = props => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        organizationName: ''
    });

    const [isOrganization, setIsOrganization] = useState(false);

    const {history} = props;

    const handleChanges = event =>
    {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const register = event =>
    {
        event.preventDefault();
        console.log(user);
        // axios.post('https://save-the-animal-buildweek.herokuapp.com/api/auth/register', user)
        // .then(response =>
        // {
        //     // localStorage.setItem('token', );
        //     // history.push('/');
        // })

    }

    const handleClick = event =>
    {
        event.preventDefault();
        setIsOrganization(true);
    }

    return (
        <form onSubmit={register}>
            <div>
                <label htmlFor='name'>UserName </label>
                <input id='name' type='text' name='username' placeholder='username' onChange={handleChanges} value={user.username}/>
            </div>

            <div>
                <label htmlFor='email'>Email </label>
                <input id='email' type='email' name='email' placeholder='email@email.com' onChange={handleChanges} value={user.email}/>
            </div>
            
            <div>
                <label htmlFor='password'>Password </label> 
                <input id='password' type='password' name='password' placeholder='password' onChange={handleChanges} value={user.password}/>
            </div>

            <button onClick={handleClick}>I'm an Organization</button>
            {isOrganization && (
            <div>
                <label htmlFor='organization'>Organization </label> 
                <input id='organizaton' type='text' name='organizationName' placeholder='organization name' onChange={handleChanges} value={user.organizationName}/>
                <button type='submit'>Submit</button>
            </div>
            )}
            <button type='submit'>I'm a Supporter</button>

        </form>
    )
};

export default Signup;