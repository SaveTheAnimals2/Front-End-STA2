import React, {useState} from 'react';

const Login = props => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    return (
        <form>
            <div>
                <label htmlFor='name'>Username </label>
                <input id='name' type='text' name='name' placeholder='Full Name'/>
            </div>
            
            <div>
                <label htmlFor='password'>Password </label> 
                <input id='password' type='password' name='name' placeholder='Full Name'/>
            </div>

            <button type='login'>Login</button>

        </form>
    )
};

export default Login;