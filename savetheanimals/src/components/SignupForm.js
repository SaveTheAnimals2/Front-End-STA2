import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import "./SignUp.css";

const SignupForm = props => {


  const [user, setUser] = useState({
    username: '',
    organizationName: '',
    email: '',
    password: '',
    password2: '',
  });

  const { history } = props;

  const handleChanges = event => {

    setUser({
      ...user,
      [event.target.name]: event.target.value
    });

    console.log(user)
  };

  const register = event => {
    event.preventDefault();
    const loginUser = {
      username: user.username,
      organizationName: user.organizationName,
      email: user.email,
      password: user.password
    };
    
    axios.post('https://save-the-animal-buildweek.herokuapp.com/api/auth/register', loginUser)
      .then(response => {
        history.push('/login');
      })
  }

 return (
  <div className="signup-form">
    <div className="signup-formbox">
      <form onSubmit={register}>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="User Name"
            onChange={handleChanges}
            value={user.username}
          />
        </div>
  
      

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email@email.com"
            onChange={handleChanges}
            value={user.email}
          />
        </div>


        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChanges}
            value={user.password}
          />
          {user.password.length > 0 && user.password.length < 8 ? 'Password too short' : ''}
        </div>

        <div>
          <label htmlFor="password2">Confirm Password</label>
          <input
            id="password2"
            type="password"
            name="password2"
            placeholder="re-enter password"
            onChange={handleChanges}
            value={user.password2}
          />
          {user.password !== user.password2 ? 'Password does not match' : ''}
        </div>

        <div>
          <button type="submit">I'm a Supporter</button>
        </div>

        <div>
          <label htmlFor="name">Organization</label>
          <input
            id="organizationName"
            type="text"
            name="organizationName"
            placeholder="Name of Organization"
            onChange={handleChanges}
            value={user.organizationName}
          />
        </div>
        <div>
          <button type="submit">I'm an Organization</button>
        </div>

      </form>
    </div>
  </div>
);
};

export default SignupForm;
