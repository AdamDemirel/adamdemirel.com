import React from "react";
import { withRouteData } from "react-static";
import Nav from "../components/Nav";
import { Name } from "../pages/home";
import styled from "styled-components";
import { top, left, space, fontFamily, fontSize, lineHeight } from "../backend/StyledSystem";
import Scrollspy from "react-scrollspy";
import SEO from "../components/SEO";

export default withRouteData(({ title, content, path }) => {
  // console.log("post props", props);

  return (
    <>
      <SEO
        title={`${title} - Writing - Adam Demirel's Personal Website`}
        description="Adam Demirel is a Software Developer from Sydney, working with the Web and Internet Of Things at Paper Moose. Some of his main skills are Javascript, React, HTML, Styled Components, Linux, Microcontrollers, and modern UI Theory. Learn more."
        path={`/${path}`}
      />
      <Nav />
      <Card>
        <Name>{title}</Name>
        <ScrollspyOuterWrapper>
          <ScrollspyStickyWrapper>
            {title === "Sleep" ?
              <div>here</div>
              :

              <Scrollspy
                items={[
                  "section-0",
                  "section-1",
                  "section-2",
                  "section-9",
                  "section-10",
                  "section-15",
                  "section-22",
                  "section-29",
                  "section-44",
                  "section-49",
                  "section-50",
                  "section-64",
                  "section-65",
                  "section-66",
                  "section-67",
                  "section-69",
                  "section-70",
                  "section-71",
                  "section-72"
                ]}
                currentClassName="activeScrollspy"
              >
                <li>
                  <a href="#section-0">Job Satisfaction</a>
                </li>
                <Li>
                  <a href="#section-1">1. Motivational Characteristics</a>
                </Li>
                <li>
                  <a href="#section-2">1.1 Job Characteristics Model</a>
                </li>
                <li>
                  <a href="#section-9">1.2 Growth Needs Strength</a>
                </li>
                <li>
                  <a href="#section-10">1.3 Extending the JCM</a>
                </li>

                <Li>
                  <a href="#section-15 ">2. Social Characteristics</a>
                </Li>
                <Li>
                  <a href="#section-22">3. Environment Characteristics</a>
                </Li>
                <Li>
                  <a href="#section-29">4. Worker Characteristics</a>
                </Li>

                <Li>
                  <a href="#section-44">5. Person-Environment Fit</a>
                </Li>

                <Li>
                  <a href="#section-49">6. Other</a>
                </Li>
                <li>
                  <a href="#section-50">6.1 Income</a>
                </li>
                <Li>
                  <a href="#section-64">7. Experience Sampling</a>
                </Li>
                <li>
                  <a href="#section-65">8. Research Summary</a>
                </li>
                <li>
                  <a href="#section-66">8.1. Correlation Summary</a>
                </li>
                <li>
                  <a href="#section-67">9. Application</a>
                </li>
                <li>
                  <a href="#section-69">10. Conclusion</a>
                </li>
                <li>
                  <a href="#section-70">11. Compressed Conclusion</a>
                </li>

                <Li>
                  <a href="#section-71">12. Recommended Reading</a>
                </Li>
                <Li>
                  <a href="#section-73">13. Resources & References</a>
                </Li>
              </Scrollspy>
            }
          </ScrollspyStickyWrapper>
        </ScrollspyOuterWrapper>
        <TextWrapper>
          <Text dangerouslySetInnerHTML={{ __html: content }} />
        </TextWrapper>
      </Card>
    </>
  );
});

const Text = styled.div`
  width: 50%;
  margin: 0 auto;
  box-sizing: border-box;

  ${fontFamily({ fontFamily: "karla" })}
  ${fontSize({ fontSize: ["20px", "20px", "20px"] })}
  ${lineHeight({ lineHeight: ["24px", "30px", "30px"] })}

  @media (max-width: 960px) {
    width: 100%;
  }

  @media (min-width: 601px) and (max-width: 960px) {
    max-width: 550px;
  }

  @media (max-width: 600px) {
    max-width: 550px;
  }



  h1 {
    color: #625CDF;
    line-height: 45px;
    letter-spacing: -1px;
  }
`;

const TextWrapper = styled.div`
  max-width: 100%;

  display: inline-block;
  position: static;
  top: 0;

  @media (max-width: 600px) {
    width: 100%;
    word-wrap: break-word;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    width: 100%;
  }

  @media (min-width: 960px) and (max-width: 1200px) {
    padding-left: 200px;
  }
`;

const ScrollspyOuterWrapper = styled.div`
  position: absolute;
  height: 100%;

  @media (max-width: 960px) {
    height: auto;
    position: static;
  }
`;

const ScrollspyStickyWrapper = styled.div`
  ${fontFamily({ fontFamily: "karla" })}
  ${fontSize({ fontSize: ["16px", "20px", "14px"] })}
  font-weight: 500;
  position: sticky;
  top: 25px;

  @media (max-height: 670px) {
    position: static;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style: none;
    padding-right: 20px;
    border-bottom: 2px solid #191545;
    padding-bottom: 20px;

    @media (min-width: 961px) {
      border-right: 2px solid #191545;
      border-bottom: none;
    }

    @media (max-width: 960px) {
      padding-left: 0;
    }
  }

  .activeScrollspy {
    text-decoration: underline;
    font-weight: 700;
  }
`;

const Li = styled.li`
  margin-top: 10px;
`;

const Card = styled.div`
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

  // styles footnotes
  code {
    background-color: #EFF8FF;
    padding: 0 3px;
    font-size: 16px;
  }

  // logic for realigning the table of contents from top to side
  @media(max-width: 960px) {
    right: unset;
    position: static;
  }
`;
