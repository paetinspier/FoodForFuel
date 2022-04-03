import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/SignUp";

function Routes() {
  return (
      <>
        <Route exact path="/signup">
            <Signup />
        </Route>
        <Route exact path="/login">
            <Login />
        </Route>
      </>

  );
}

export default Routes;