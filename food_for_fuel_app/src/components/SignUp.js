import React from "react";
import UserPool from '../UserPool';
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const onSubmit = event => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };


  return (
    <form onSubmit={onSubmit}>
      <input value={email} onChange={event => setEmail(event.target.value)}/>
      <input value={password} onChange={event => setPassword(event.target.value)}/> 
      <button type='submit'>Submit</button>
    </form>
  );
}

export default Signup;