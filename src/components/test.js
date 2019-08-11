import React from "react";
import { withRouteData } from "react-static";
import { withTheme } from "styled-components";

export default withTheme(
  withRouteData(props => {
    return <div>hello im here</div>;
  })
);
