import React from "react";

const Signup = props => {
  return (
    <div className="">
      {props.signups.map(signup => (
        <div className="" key={signup.id}>
          <h2>{signup.name}</h2>
          <p>{signup.email}</p>
          <p>{signup.password}</p>
        </div>
      ))}
    </div>
  );
};

export default Signup;