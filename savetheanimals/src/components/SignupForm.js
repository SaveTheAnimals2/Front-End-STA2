import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import "./SignUp.css";

const SignupForm = props => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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
    
    axios.post("", user).then(response => {
        console.log(response);
        // localStorage.setItem('token', );
        // history.push('/');
        console.log(user);
        // setUser({name: "", email: "", password: ""})
    });
  };

  return (
    <div className="signup-form">
      <div className="signup-formbox">
        <form onSubmit={register}>
          <h1>Sign Up</h1>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChanges}
              value={user.name}
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
            { user.password.length > 0 && user.password.length < 8 ? 'Password too short' : ''}
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
            { user.password !== user.password2 ? 'Password does not match' : ''}
          </div>

          <div>
            <button type="submit">I'm an Organization</button>
          
            <button type="submit">I'm a Supporter</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
