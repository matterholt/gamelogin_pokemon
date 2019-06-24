import React, { useState } from "react";
import ReactDOM from "react-dom";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./styles.css";

import Login from "./styleComps/LoginButton";

const NewUser = ({ signInReturn }) => {
  return (
    <div>
      <h1> for New trainers </h1>
      <button onClick={signInReturn}> return </button>
    </div>
  );
};

const LogInput = ({ signInReturn }) => {
  return (
    <>
      <h2> Get ready for battle </h2>
      <label>
        User Name:
        <input type="email" />
      </label>
      <label>
        Password:
        <input type="password" />
      </label>
      <button> GO! </button>
      <button onClick={signInReturn}> New User </button>
    </>
  );
};

const LoginLogic = () => {
  const [newUser, setNewUser] = useState(false);
  const [signIn, setSignIn] = useState(true);

  function signInNew() {
    setNewUser(true);
    setSignIn(false);
  }
  function signInPrev() {
    setSignIn(true);
    setNewUser(false);
  }
  function signInReturn() {
    setNewUser(false);
    setSignIn(false);
  }

  if (signIn === true) {
    return <LogInput signInReturn={signInReturn} />;
  } else if (newUser === true) {
    return <NewUser signInReturn={signInReturn} />;
  } else {
    return <Login newSign={signInNew} prevSign={signInPrev} />;
  }
};

function App() {
  return (
    <div className="login">
      <div className="login top" />
      <div className="login band">
        <div className="center">
          <div className="login ">
            <LoginLogic />
          </div>
        </div>
      </div>
      <div className="login bottom" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
