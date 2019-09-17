import React from "react";
import styled from "styled-components";
import { Li } from "../pages/home";
import { Link } from "@reach/router";
import { space } from "../backend/StyledSystem";

const NavLink = props => (
  <StyledLink
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          backgroundColor: isCurrent ? "#625cdf" : "transparent",
          color: isCurrent ? "white" : "inherit"
        }
      };
    }}
  />
);

export default () => (
  <Nav>
    <Li>
      <NavLink to="/" exact>
        About
      </NavLink>
    </Li>
    <Li>
      <NavLink to="/skills" exact>
        Skills
      </NavLink>
    </Li>
    <Li>
      <NavLink to="/writing" exact>
        Writing
      </NavLink>
    </Li>
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
