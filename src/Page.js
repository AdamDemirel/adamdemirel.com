import React, { Suspense } from "react";
import { Root, Routes } from "react-static";
import { ThemeProvider } from "styled-components"; // Provi
import theme from "./backend/theme";
import Body from "./backend/Body";
import { Router } from "@reach/router";
import { DotLoader } from "react-spinners";
import styled from "styled-components";

const Spinner = () => (
  <SpinnerWrapper>
    <DotLoader sizeUnit={"px"} size={150} color="#2368A2" />
  </SpinnerWrapper>
);

const SpinnerWrapper = styled.div`
  display: block;
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 75px);
`;

export default class Page extends React.Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <ThemeProvider theme={theme}>
          <Root>
            <Body />
            <Router>
              <Routes default />
            </Router>
          </Root>
        </ThemeProvider>
      </Suspense>
    );
  }
}
