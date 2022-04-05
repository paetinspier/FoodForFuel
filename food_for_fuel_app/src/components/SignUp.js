import React from "react";
import Form from "react-bootstrap/Form";
import SubmitButton from "../components/SubmitButton";
import { useState } from "react";
import { useFormFields } from "../lib/hooksLib"
import { Auth } from "aws-amplify";
import "./CSS/SignUp.css";

function Signup() {
  const [setNewUser] = useState(null);
  const [fields] = useFormFields({ email: "", password: ""});

  function validateForm() {
    return (fields.email.length > 0 && 
            fields.password.length > 0 && 
            fields.password === fields.confirmPassword
    );
  }

function validateConfirmationForm() {
  return fields.confirmationCode.length > 0;
}

function handleSubmitEmail(userName){
  fields.email = userName.target.value;
  console.log(fields.email);
}

function handleSubmitPWord(pWord){
  fields.password = pWord.target.value;
  console.log(fields.password);
}

function handleSubmitConfirmPWord(pWord){
  fields.confirmPassword = pWord.target.value;
  console.log(fields.confirmPassword);
}

async function handleSubmit(event) {
  event.preventDefault();
  console.log("submit");
  
  try{
    const newUser = await Auth.signup({
      username: fields.email,
      password: fields.password,
    });
    setNewUser(newUser);

  } catch (e){
    alert("Something is missing. Please try again.");
  }
}

async function handleConfirmationSubmit(event) {
  event.preventDefault();

  try {
    await Auth.confirmSignUp(fields.email, fields.confirmationCode);
    await Auth.signIn(fields.email, fields.password);

  } catch (e){
    alert("Something is wrong. Please try again.");
  }
}

function renderConfirmationForm() {
  return (
    <Form onSubmit={handleConfirmationSubmit}>
      <Form.Group controlId="confirmationCode" size="lg">
        <Form.Label>Confirmation Code</Form.Label>
        <Form.Control
          autoFocus
          type="tel"
          //onChange={handleFieldChange}
          value={fields.confirmationCode}
        />
        <Form.Text muted>Please check your email for the code.</Form.Text>
      </Form.Group>
      <SubmitButton
        block
        size="lg"
        type="submit"
        variant="success"
        disabled={!validateConfirmationForm()}
      >
        Verify
      </SubmitButton>
    </Form>
  );
}

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email" size="lg">
        <Form.Label>Email</Form.Label>
        <Form.Control
          autoFocus
          type="email"
          onChange={handleSubmitEmail}
          //value={fields.email}
        />
      </Form.Group>
      <Form.Group controlId="password" size="lg">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          onChange={handleSubmitPWord}
          //value={fields.password}
        />
      </Form.Group>
      <Form.Group controlId="confirmPassword" size="lg">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          onChange={handleSubmitConfirmPWord}
          //value={fields.confirmPassword}
        />
      </Form.Group>
      <SubmitButton
        block
        size="lg"
        type="submit"
        variant="success"
        disabled={validateForm()}
      >
        Signup
      </SubmitButton>
    </Form>
  );
}

export default Signup;