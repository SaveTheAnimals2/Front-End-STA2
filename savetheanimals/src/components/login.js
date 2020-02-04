import React from "react";

const Login = props => {
  return (
    <div>
      {props.logins.map(login => (
        <div key={login.id}>
          <p>{login.username}</p>
          <p>{login.password}</p>
        </div>
      ))}
    </div>
  );
};

export default Notes;