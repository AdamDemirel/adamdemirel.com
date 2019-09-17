import React from "react";
import { Card, Name, Text } from "./home";
import { Link } from "@reach/router";
import styled from "styled-components";
import Nav from "../components/Nav";
import SEO from "../components/SEO";

export default props => {
  console.log("post props", props);

  return (
    <>
      <SEO
        title="Writing - Adam Demirel's Personal Website"
        description="Adam Demirel is a Software Developer from Sydney, working with the Web and Internet Of Things at Paper Moose. Some of his main skills are Javascript, React, HTML, Styled Components, Linux, Microcontrollers, and modern UI Theory. Learn more."
        path="/writing"
      />
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
