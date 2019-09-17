import React from "react";
import { Card, Name, Text } from "./home";
import { Link } from "@reach/router";
import styled from "styled-components";
import Nav from "../components/Nav";

export default props => {
  console.log("post props", props);

  return (
    <>
      <Nav />
      <Card>
        <Name>Writing</Name>
        <Text>
          <h3>Previous Posts</h3>
          My old writing can be found on my <a href="https://medium.com/@adxm">Medium</a>.
          <hr />
          <h3>New</h3>
          <ul>
            <li>
              17-09-19: <StyledLink to="/job-satisfaction">Job Satisfaction</StyledLink>
            </li>
          </ul>
        </Text>
      </Card>
    </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;
