import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./CSS/Login.css";
import {useNavigate} from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setAuthentication] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }


  async function handleSubmit(event){
    event.preventDefault();

    try{
      await Auth.signIn(email,password);
      setAuthentication(true);
    } catch (e){
      alert(e.message);
    }
  }

  const navigate = useNavigate();
  const handleValidUser = () => {
    navigate('/dashboard');
  }
  const handleInvalidUser = () => {
    alert('invalid credentials');
  }


  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()} onClick={isAuthenticated ? handleValidUser : handleInvalidUser}>
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;