import React from "react";
import styled from "styled-components";
import { fontFamily, fontWeight, fontSize, width, left, top, space, lineHeight, letterSpacing } from "../backend/StyledSystem";
import SEO from "../components/SEO";
import Nav from "../components/Nav";

// navbar in topright with About, Skills, Writing, Works
// https://designmodo.com/wp-content/uploads/2017/10/neil-portfolio-image.jpg

export default class Home extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="Adam Demirel's Personal Website"
          description="Adam Demirel is a Software Developer from Sydney, working with the Web and Internet Of Things at Paper Moose. Learn more."
          path="/"
        />
        <Nav />
        <Card>
          <Name>Adam Demirel.</Name>
          <Text>
            <Span>
              I'm a <Yellow>Software Developer</Yellow> from Sydney, working with the Web and{" "}
              <A to="https://en.wikipedia.org/wiki/Internet_of_things" iot>
                Internet Of Things
              </A>{" "}
              at{" "}
              <A to="https://papermoose.com/">
                <Moose>Paper Moose</Moose>
              </A>
              .
            </Span>
            <Span>
              I'm passionate about the power of computers and technology to improve the world, with a particular{" "}
              <Blue> interest in biotech and health</Blue>.
            </Span>
            <Span>
              I've got a <Purple>background in neuroscience and philosophy</Purple>, and a curiosity about everything.
            </Span>

            <Span>
              Outside of work, I spend my time <Hl4>rock-climbing</Hl4>, with my loved ones, or <Hl5>learning</Hl5> about whatever my current
              fascination is.
            </Span>
          </Text>
          <Links>
            <Li>
              <A to="mailto:adxm@msn.com">Email</A>
            </Li>{" "}
            /{" "}
            <Li>
              <A to="https://twitter.com/AdamDemirel">Twitter</A>
            </Li>{" "}
            /{" "}
            <Li>
              <A to="https://www.linkedin.com/in/adam-demirel">LinkedIn</A>
            </Li>{" "}
            /{" "}
            <Li>
              <A to="https://github.com/brasscapon">Github</A>
            </Li>{" "}
            /{" "}
            <Li>
              <A to="https://medium.com/@adxm">Medium</A>
            </Li>
          </Links>
        </Card>
      </>
    );
  }
}

// {
//   /* <Span>
//               My preferred dev stack is Linux / JS / Node / HTML / CSS w. Styled Components / React, and Express / MongoDB for backend.
//               <br />
//             </Span> */
// }

const Div = styled.div``;

export const Card = styled.div`
  width: auto;
  ${top({ top: ["20px", "10%", "10%"] })}
  ${left({ left: ["unset", "unset", "0"] })}
  ${space({ p: "15px", m: ["10px", "10px", "auto"] })}
  right: 0;
  max-width: 1250px;
  font-weight: 900;
  z-index: 999;
  position: absolute;
  color: #191545;
  font-weight: 400;
  background-color: white;
  border-radius: 5px;
`;

export const Name = styled.h1`
  ${fontFamily({ fontFamily: "karla" })}
  ${fontWeight({ fontWeight: 2 })}
  ${fontSize({ fontSize: ["40px", "80px", "110px"] })}
  ${space({ mt: "15px", ml: 0, mr: 0, mb: ["30px", "35px", "40px"], p: 0 })}
  ${letterSpacing({ letterSpacing: ["-2px", "-2px", "-5px"] })}
  vertical-align: text-top;
`;

export const Text = styled.div`
  width: 95%;
  ${fontFamily({ fontFamily: "karla" })}
  ${fontSize({ fontSize: ["20px", "24px", "26px"] })}
  ${lineHeight({ lineHeight: ["24px", "32px", "36px"] })}
`;

const Span = styled.p`
  font-family: inherit;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
`;

export const Yellow = styled.span`
  background-color: #fefecf;
  color: black;

  &:hover {
    background-color: #191545;
    color: #fefecf;
  }
`;

const Moose = styled.span`
  background-color: #f09a9d;
  color: white;

  &:hover {
    color: #f09a9d;
    background-color: #191545;
  }
`;

const Links = styled.ul`
  ${fontFamily({ fontFamily: "karla" })}
  letter-spacing: 0.4px;
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  display: inline;
  font-family: inherit;
  ${space({ m: "5px" })}

  color: #625cdf;

  &:hover {
    color: white;
    background-color: #625cdf;
  }
`;

const Blue = styled.span`
  background-color: #eff8ff;

  &:hover {
    background-color: #191545;
    color: #eff8ff;
  }
`;

const Purple = styled.span`
  background-color: #f1e1ff;

  &:hover {
    background-color: #191545;
    color: #f1e1ff;
  }
`;

const Hl4 = styled.span`
  background-color: #f5cf8e;

  &:hover {
    background-color: #191545;
    color: #f5cf8e;
  }
`;

const Hl5 = styled.span`
  background-color: #eaedf0;
  color: black;

  &:hover {
    background-color: #191545;
    color: white;
  }
`;

const StyledA = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: inherit;
    cursor: pointer;
    ${({ iot }) => iot && "text-decoration: underline;"}
  }
`;

const A = props => (
  <StyledA href={props.to} target="_blank" rel="noopener noreferrer" iot={props.iot}>
    {props.children}
  </StyledA>
);
