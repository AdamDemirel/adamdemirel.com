import React, { Suspense } from "react";
import { Root, Routes } from "react-static";
import { ThemeProvider } from "styled-components"; // Provi
import theme from "./backend/theme";
import Body from "./backend/Body";

export default class Page extends React.Component {
  render() {
    return (
      <div id="App">
        <ThemeProvider theme={theme}>
          <Suspense fallback={<div>Loading...</div>}>
            <Body />
            <Root>
              <Routes />
            </Root>
          </Suspense>
        </ThemeProvider>
      </div>
    );
  }
}
