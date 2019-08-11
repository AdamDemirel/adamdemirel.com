import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

// Your top level component
import Page from "./Page";

// Export your top level component as JSX (for static rendering)
export default Page;

// Render your app
if (typeof document !== "undefined") {
  const target = document.getElementById("root");

  const renderMethod = target.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

  const render = Comp => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target
    );
  };

  // Render!
  render(Page);

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept("./Page", () => {
      render(Page);
    });
  }
}
