import React, { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const Button = styled.button`
  color: turquoise;
`;

const LoginPage = ({ newSign, prevSign }) => {
  return (
    <>
      <label>
        New Trainer
        <Button onClick={newSign}>Create Tranier</Button>
      </label>
      <label>
        Preious Trainer
        <Button onClick={prevSign}>Sign in Tranier</Button>
      </label>
    </>
  );
};

export default LoginPage;
