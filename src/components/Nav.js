import React from "react";
import styled from "styled-components";
import { Li } from "../pages/home";
import { Link } from "@reach/router";

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

export default ({ open, setOpen, title }) => {
  const handleClick = e => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <Nav>
      <Li>
        <NavLink to="/" exact="true">
          About
        </NavLink>
      </Li>
      <Li>
        <NavLink to="/skills" exact="true">
          Skills
        </NavLink>
      </Li>
      <Li>
        <NavLink to="/writing" exact="true">
          Writing
        </NavLink>
      </Li>
      {title && (
        <MobileDiv>
          <Li>
            <NavLink to="/asdfasdfsdf" exact="true" onClick={handleClick}>
              Dropdown
            </NavLink>
          </Li>
        </MobileDiv>
      )}
    </Nav>
  );
};

const MobileDiv = styled.div`
  display: inline-block;

  @media (min-width: 600px) {
    display: none;
  }
`;

const Nav = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  list-style: none;
  padding-right: 10px;
  padding-top: 10px;
  margin: 0px;
  padding-bottom: 10px;
  font-family: Karla;
  text-decoration: none;
  font-weight: 700;
  color: inherit;

  @media (max-width: 600px) {
    position: sticky;
    top: 0px;
    float: right;
    z-index: 2;
    background-color: white;
    width: 100%;
    padding-left: 10px;
    padding-bottom: 15px;
    border-bottom: 1px solid black;
  }
`;

const StyledLink = styled(Link)`
  &:hover {
    color: inherit;
    cursor: pointer;
    ${({ iot }) => iot && "text-decoration: underline;"}
  }
`;
