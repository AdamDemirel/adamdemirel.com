import React, { Suspense } from "react";
import { Root, Routes } from "react-static";
import { ThemeProvider } from "styled-components"; // Provi
import theme from "./backend/theme";
import Body from "./backend/Body";
import { Router } from "@reach/router";

export default class Page extends React.Component {
  render() {
    return (
      <Root>
        <div id="App">
          <ThemeProvider theme={theme}>
            <Suspense fallback={<div>Loading...</div>}>
              <Body />
              <Router>
                <Routes default />
              </Router>
            </Suspense>
          </ThemeProvider>
        </div>
      </Root>
    );
  }
}
