import React from "react"
import styled from "styled-components"
import { Li } from "../components/Home"
import { Link } from "@chakra-ui/react"
import NextLink from "next/link"

// TODO: add active link colors back
// https://dev.to/yuridevat/how-to-add-styling-to-an-active-link-in-nextjs-593e
const NavLink = props => (
  <Link as={NextLink}
    // {...props}
    // getProps={({ isCurrent }) => {
    //   // the object returned here is passed to the
    //   // anchor element's props
    //   return {
    //     style: {
    //       backgroundColor: isCurrent ? "#625cdf" : "transparent",
    //       color: isCurrent ? "white" : "inherit"
    //     }
    //   }
    // }}
    href={props?.href}
    _focus={{ color: "inherit" }}
  >{props?.children}</Link>
)

type NavProps = {
  open?: any
  setOpen?: any
  title?: any
}

const Nav = ({ open, setOpen, title }: NavProps) => {
  const handleClick = e => {
    e.preventDefault()
    setOpen(!open)
  }

  return (
    <NavStyles>
      <Li>
        <NavLink href="/">
          About
        </NavLink>
      </Li>
      <Li>
        <NavLink href="/skills">
          Skills
        </NavLink>
      </Li>
      {/* <Li>
        <NavLink to="/writing" exact="true">
          Writing
        </NavLink>
      </Li> */}
      {title && (
        <MobileDiv>
          <Li>
            <NextLink href="/asdfasdfsdf" onClick={handleClick}>
              Dropdown
            </NextLink>
          </Li>
        </MobileDiv>
      )}
    </NavStyles>
  )
}

const MobileDiv = styled.div`
  display: inline-block;

  @media (min-width: 600px) {
    display: none;
  }
`

const NavStyles = styled.ul`
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
`

// const StyledLink = styled(Link)`
//   &:hover {
//     color: inherit;
//     cursor: pointer;
//     ${({ iot }) => iot && "text-decoration: underline;"}
//   }
// `

export default Nav
