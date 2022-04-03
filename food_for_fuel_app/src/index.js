import React from 'react';
import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import { render, Route } from 'react-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Amplify } from 'aws-amplify';
import config from './config';

function index(){
  const rootElement = document.getElementById("root");

  Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      identityPoolId: config.cognito.IDENTITY_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    Storage: {
      region: config.s3.REGION,
      bucket: config.s3.BUCKET,
      identityPoolId: config.cognito.IDENTITY_POOL_ID
    },
    API: {
      endpoints: [
        {
          name: "notes",
          endpoint: config.apiGateway.URL,
          region: config.apiGateway.REGION
        },
      ]
    }
  });

  render(
    <React.StrictMode>
      <Route exact path="/signUp">
        <SignUp />
      </Route>
      <Route exact path="/app">
        <App />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </React.StrictMode>,
    rootElement
  );
}

export default index;