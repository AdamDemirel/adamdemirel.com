import React from "react";
import styled from "styled-components";
import { Li } from "../pages/home";
import { Link } from "@reach/router";
import { space } from "../backend/StyledSystem";

export default () => (
  <Nav>
    <Li>
      <StyledLink to="/" exact>
        About
      </StyledLink>
    </Li>
    <Li>
      <StyledLink to="/skills" exact>
        Skills
      </StyledLink>
    </Li>
    {/* <Li>
      <StyledLink to="/writing" exact>
        Writing
      </StyledLink>
    </Li> */}
  </Nav>
);

const Nav = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  list-style: none;
  margin-right: 10px;
`;

const StyledLink = styled(Link)`
  ${space({ p: "5px" })}
  font-family: Karla;
  text-decoration: none;
  font-weight: 700;
  color: inherit;

  &:hover {
    color: inherit;
    cursor: pointer;
    ${({ iot }) => iot && "text-decoration: underline;"}
  }
`;
