import React from "react";
import { H1, H2, P, Button, BodyWrapper } from "../components";
import { withRouter } from "react-router-dom";

const Lander = props => {
  const signIn = () => {
    props.history.push("/signin");
  };

  return (
    <BodyWrapper>
      <H1>Showcase</H1>
      <P>
        A place to Showcase
      </P>
      <Button onClick={signIn}>Get Started!</Button>
    </BodyWrapper>
  );
};

export default withRouter(Lander);
