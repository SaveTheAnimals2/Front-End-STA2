import Reach from 'react';

const Login = props => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    return (
        <form>
            <div>
                <label htmlFor='name'>Username </label>
                <input id='name' type='text' name='name' placeholder='Full Name' onChange={handleChanges}/>
            </div>
            
            <div>
                <label htmlFor='password'>Password </label> 
                <input id='password' type='password' name='name' placeholder='Full Name' onChange={handleChanges}/>
            </div>

            <button type='login'>Login</button>

        </form>
    )
}