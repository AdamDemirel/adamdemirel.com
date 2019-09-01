import React, { Suspense } from "react";
import { Root, Routes } from "react-static";
import { ThemeProvider } from "styled-components"; // Provi
import theme from "./backend/theme";
import Body from "./backend/Body";
import { Router } from "@reach/router";

export default class Page extends React.Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
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
