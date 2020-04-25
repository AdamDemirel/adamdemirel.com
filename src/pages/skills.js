import React, { useState } from "react";
import Nav from "../components/Nav";
import { Yellow, Card, Name, Text } from "./home";
import styled from "styled-components";
import { width, space, fontSize } from "../backend/StyledSystem";
import SEO from "../components/SEO";
import skills from "./skills-data";

const UnfilteredSkills = () => {
  return skills.map(({ title, items }) => (
    <Section>
      <H2>{title}</H2>
      <Ul>
        {items.map(({ name, highlight }) => (
          <Li>
            {highlight ?
              <Yellow>{name}</Yellow> :
              name
            }
          </Li>
        ))}
      </Ul>
    </Section>
  ))
}

const FilteredSkills = () => {
  return (
    <>
      <Section>
        <Ul>
          {
            skills.map(({ items }) => (
              items.map(({ name, highlight }) => (
                highlight && <Li><Yellow>{name}</Yellow></Li>
              ))
            ))
          }
        </Ul>
      </Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
    </>
  );
}

export default () => {
  const [filtered, setFiltered] = useState(false);
  console.log({ filtered })

  return (
    <>
      <SEO
        title="Skills - Adam Demirel's Personal Website"
        description="Adam Demirel is a Software Developer from Sydney, working with the Web and Internet Of Things at Paper Moose. Some of his main skills are Javascript, React, HTML, Styled Components, Linux, Microcontrollers, and modern UI Theory. Learn more."
        path="/skills"
      />
      <Nav />
      <Card>
        <Name display="inline-block">Skills.</Name>
        <Filter onClick={() => setFiltered(!filtered)}>
          <Yellow>
            * filter key skills
          </Yellow>
        </Filter>
        <Text>
          <Wrapper>
            {
              filtered ?
              <FilteredSkills /> :
              <UnfilteredSkills />
            }
          </Wrapper>
        </Text>
      </Card>
    </>
  )
};


const Filter = styled.span`
  vertical-align: top;
  font-family: Karla;
  font-weight: 700;
  cursor: pointer;

  span::selection {
    background: transparent;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 960px) {
    width: 80vw;
  }
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  ${space({ pt: 0, pr: 0, pb: ["40px", "70px", "60px"], pl: "10px" })}
  vertical-align: text-top;
`;

const Li = styled.li``;

const H2 = styled.h2`
  ${fontSize({ fontSize: ["24px", "28px", "32px"] })}
  ${space({ pb: ["15px", "20px", "20px"] })}
  margin: 0;
`;

const Section = styled.div`
  ${width({ width: ["100%", "45%", "33%"] })}
  box-sizing: border-box;
`;
