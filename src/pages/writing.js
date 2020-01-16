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
        <Name>Writing.</Name>
        <Text>
          <p>
            I occasionally write about topics that infatuate my attention, or
            that I deem to be important.
          </p>
          <p>
            I usually write as a means of research and discovery, and/or to get
            the ideas out of my head and give them some structure. I also enjoy deconstructing complex systems.
          </p>
          <p>
            I don't aim for my writing to be 100% easy to read or approachable,
            but rather comprehensive and act as an end-point.
          </p>
          <p>
            My old posts can be found on my{" "}
            <a href="https://medium.com/@adxm">Medium</a>. My newer writing can
            be found below. More to come.
          </p>

          <ul>
            <li>
              23-12-19: <StyledLink to="/happiness">Happiness</StyledLink>
            </li>
            <li>
              17-09-19:{" "}
              <StyledLink to="/job-satisfaction">Job Satisfaction</StyledLink>
            </li>
            <li>
              12-04-18: <StyledLink to="/sleep">Sleep Quality</StyledLink>
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
