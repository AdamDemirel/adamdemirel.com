import React from "react";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Child = styled.div`
  max-width: 600px;

  @media (max-width: 960px) {
    * {
      padding: 0 50 px;
      margin: 0 auto;
      display: block;
      max-width: 90%;
    }
  }
`;

const Title = styled.h1`
  font-family: Karla;
  text-align: center;
  padding-top: 30px;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export default () => (
  <Container>
    <Child>
      <img src="/images/404.png" alt="cartoon character holding a question mark sign" />
      <Title>Sorry Amigo, this page doesn't exist.</Title>
    </Child>
  </Container>
);
