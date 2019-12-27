import React from "react";
import Nav from "../components/Nav";
import { Yellow, Card, Name, Text } from "./home";
import styled from "styled-components";
import { width, space, fontSize } from "../backend/StyledSystem";
import SEO from "../components/SEO";

export default () => (
  <>
    <SEO
      title="Skills - Adam Demirel's Personal Website"
      description="Adam Demirel is a Software Developer from Sydney, working with the Web and Internet Of Things at Paper Moose. Some of his main skills are Javascript, React, HTML, Styled Components, Linux, Microcontrollers, and modern UI Theory. Learn more."
      path="/skills"
    />
    <Nav />
    <Card>
      <Name>Skills.</Name>
      <Text>
        <Wrapper>
          <Section>
            <H2>Languages</H2>
            <Ul>
              <Li>
                <Yellow>Javascript</Yellow> •••••
              </Li>
              <Li>Node.js ••••◦</Li>
              {/* <Li>Ruby •••◦◦</Li> */}
            </Ul>
          </Section>
          <Section>
            <H2>Web Frameworks</H2>
            <Ul>
              <Li>
                <Yellow>React</Yellow> ••••◦
              </Li>
              {/* <Li>Ruby on Rails ••◦◦◦</Li> */}
            </Ul>
          </Section>
          <Section>
            <H2>Markup</H2>
            <Ul>
              <Li>
                <Yellow>HTML5</Yellow> •••••
              </Li>
              {/* <Li>HAML •••◦◦</Li> */}
              <Li>Markdown ••••◦</Li>
            </Ul>
          </Section>
          <Section>
            <H2>Styling</H2>
            <Ul>
              <Li>
                <Yellow>CSS3</Yellow> ••••◦
              </Li>
              <Li>Styled Components •••••</Li>
              {/* <Li>Flexbox ••••◦</Li> */}
              {/* <Li>CSS Grid ••••◦</Li> */}
              {/* <Li>SASS / SCSS ••••◦</Li> */}
            </Ul>
          </Section>
          <Section>
            <H2>Microcontrollers</H2>
            <Ul>
              <Li>Raspberry Pi •••◦◦</Li>
              <Li>Arduino •••◦◦</Li>
              <Li>Sensors: Color, Distance, Push •••◦◦</Li>
              <Li>NeoPixel LEDs •••◦◦</Li>
            </Ul>
          </Section>
          {/* <Section>
            <H2>CSS Frameworks</H2>
            <Ul>
              <Li>Bootstrap ••••◦</Li>
              <Li>Materialize •••◦◦</Li>
              <Li>Semantic UI •••◦◦</Li>
            </Ul>
          </Section> */}
          <Section>
            <H2>Backend</H2>
            <Ul>
              <Li>ExpressJS ••••◦</Li>
              {/* <Li>Node.js •••◦◦</Li> */}
              <Li>NetlifyCMS ••••◦</Li>
              {/* <Li>Sidekiq ••◦◦◦</Li> */}
            </Ul>
          </Section>
          <Section>
            <H2>Serialization</H2>
            <Ul>
              <Li>JSON •••••</Li>
              <Li>YAML ••••◦</Li>
              <Li>XML ••••◦</Li>
            </Ul>
          </Section>
          <Section>
            <H2>Databases</H2>
            <Ul>
              {/* <Li>SQL & PostgreSQL •••◦◦</Li> */}
              <Li>MongoDB & Mongoose •••◦◦</Li>
              <Li>AWS S3 •••◦◦</Li>
            </Ul>
          </Section>
          <Section>
            <H2>Collaboration</H2>
            <Ul>
              <Li>Git & Github ••••◦</Li>
              <Li>Agile & Trello •••◦◦</Li>
              {/* <Li>Jira & Confluence ••◦◦◦</Li> */}
            </Ul>
          </Section>
          <Section>
            <H2>Deployment</H2>
            <Ul>
              <Li>
                <Yellow>Netlify</Yellow> •••••
              </Li>
              {/* <Li>Heroku •••◦◦</Li> */}
              {/* <Li>Github Pages •••••</Li> */}
              {/* <Li>Firebase •••◦◦</Li> */}
              <Li>AWS S3 •••◦◦</Li>
            </Ul>
          </Section>
          <Section>
            <H2>Design</H2>
            <Ul>
              <Li>Modern UI Theory ••••◦</Li>
              <Li>Utilizing XD Designs ••••◦</Li>
              {/* <Li>Moodboarding ••••◦</Li> */}
              {/* <Li>Wireframing (Balsamiq) ••••◦</Li> */}
              <Li>Typography & Fonts •••◦◦</Li>
              <Li>GIMP •••◦◦</Li>
            </Ul>
          </Section>
          <Section>
            <H2>Environment</H2>
            <Ul>
              <Li>
                <Yellow>Arch Linux</Yellow> •••◦◦
              </Li>
              <Li>Bash & CLI •••◦◦</Li>
            </Ul>
          </Section>
          <Section>
            <H2>Analytics</H2>
            <Ul>
              <Li>Google Analytics ••••◦</Li>
              <Li>HotJar •••◦◦</Li>
              <Li>DataDog API ••••◦</Li>
            </Ul>
          </Section>
          <Section>
            <H2>Other</H2>
            <Ul>
              <Li>Responsive Web Design ••••◦</Li>
              <Li>Web Performance ••••◦</Li>
              <Li>SEO •••◦◦</Li>
              {/* <Li>Jekyll •••◦◦</Li> */}
              {/* <Li>Rails Multitenancy ••••◦</Li> */}
              {/* <Li>Rubygems (Utilization & Creation) ••••◦</Li> */}
              <Li>Sockets.IO •••◦◦</Li>
              <Li>NFC •••◦◦</Li>
            </Ul>
          </Section>
          <Section>
            <H2>Currently Learning</H2>
            <Ul>
              <Li>TensorFlow •◦◦◦◦</Li>
              <Li>Computer Science ••◦◦◦</Li>
            </Ul>
          </Section>
        </Wrapper>
      </Text>
    </Card>
  </>
);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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
