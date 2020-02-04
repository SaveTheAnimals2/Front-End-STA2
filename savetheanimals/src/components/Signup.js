import React from 'react';

const Signup = props => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChanges = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    return (
        <form>
            <div>
                <label htmlFor='name'>Name </label>
                <input id='name' type='text' name='name' placeholder='Full Name' onChange={handleChanges}/>
            </div>

            <div>
                <label htmlFor='email'>Email </label>
                <input id='email' type='email' name='name' placeholder='email@email.com' onChange={handleChanges}/>
            </div>
            
            <div>
                <label htmlFor='password'>Password </label> 
                <input id='password' type='password' name='name' placeholder='password' onChange={handleChanges}/>
            </div>

            <button type='submit'>I'm an Organization</button>
            <button type='submit'>I'm a Supporter</button>

        </form>
    )
};

export default Signup;