import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import SubmitButton from "../components/SubmitButton";
import "./CSS/SignUp.css";

export default function Signup() {
  const email = "";
  const  password = "";
  const  confirmPassword = "";
  const  confirmationCode = "";
  //const history = useHistory();
  const [newUser, setNewUser] = useState(null);
  //const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return (email.length > 0 && password.length > 0 && password === confirmPassword);
  }

function validateConfirmationForm() {
  return confirmationCode.length > 0;
}

async function handleSubmit(event) {
  event.preventDefault();

  setIsLoading(true);

  setNewUser("test");

  setIsLoading(false);
}

async function handleConfirmationSubmit(event) {
  event.preventDefault();

  setIsLoading(true);
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
          value={confirmationCode}
        />
        <Form.Text muted>Please check your email for the code.</Form.Text>
      </Form.Group>
      <SubmitButton
        block
        size="lg"
        type="submit"
        variant="success"
        isLoading={isLoading}
        disabled={!validateConfirmationForm()}
      >
        Verify
      </SubmitButton>
    </Form>
  );
}

function renderForm() {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="email" size="lg">
        <Form.Label>Email</Form.Label>
        <Form.Control
          autoFocus
          type="email"
          value={email}
          //onChange={handleFieldChange}
        />
      </Form.Group>
      <Form.Group controlId="password" size="lg">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          //onChange={handleFieldChange}
        />
      </Form.Group>
      <Form.Group controlId="confirmPassword" size="lg">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          //onChange={handleFieldChange}
          value={confirmPassword}
        />
      </Form.Group>
      <SubmitButton
        block
        size="lg"
        type="submit"
        variant="success"
        isLoading={isLoading}
        disabled={!validateForm()}
      >
        Signup
      </SubmitButton>
    </Form>
  );
}

return (
  <div className="Signup">
    {newUser === null ? renderForm() : renderConfirmationForm()}
  </div>
);
}