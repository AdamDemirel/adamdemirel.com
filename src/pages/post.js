import React from "react";
import { withRouteData } from "react-static";
import Nav from "../components/Nav";
import { Card, Name } from "../pages/home";
import styled from "styled-components";
import { fontFamily, fontSize, lineHeight } from "../backend/StyledSystem";
import Scrollspy from "react-scrollspy";

export default withRouteData(({ title, content }) => {
  // console.log("post props", props);

  return (
    <>
      <Nav />
      <Card>
        <Name>{title}</Name>
        <ScrollspyOuterWrapper>
          <ScrollspyStickyWrapper>
            <Scrollspy
              items={[
                "section-0",
                "section-1",
                "section-2",
                "section-3",
                "section-4",
                "section-5",
                "section-6",
                "section-8",
                "section-9",
                "section-11",
                "section-12",
                "section-13",
                "section-14"
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
                <a href="#section-3">1.1.1 Autonomy</a>
              </li>
              <li>
                <a href="#section-4">1.1.2 Skill Variety / Task Variety</a>
              </li>
              <li>
                <a href="#section-5">1.1.3 Task Identity</a>
              </li>
              <li>
                <a href="#section-6">1.1.4 Task Significance</a>
              </li>
              <li>
                <a href="#section-8">1.1.5 Task Feedback</a>
              </li>
              <li>
                <a href="#section-9">1.2 Growth Needs Strength</a>
              </li>
              <li>
                <a href="#section-11">1.3.1 Information Processing</a>
              </li>
              <li>
                <a href="#section-12">1.3.2 Job Complexity</a>
              </li>
              <li>
                <a href="#section-13">1.3.3 Specialization</a>
              </li>
              <li>
                <a href="#section-14">1.3.4 Problem Solving</a>
              </li>
              <Li>
                <a href="#section-2">2. Social Characteristics</a>
              </Li>
              <li>
                <a href="#section-3">3. Environment Characteristics</a>
              </li>
              <li>
                <a href="#section-4">4. Worker Characteristics</a>
              </li>
              <li>
                <a href="#section-5">5. Person-Environment Fit</a>
              </li>
              <li>
                <a href="#section-6">6. Other Factors</a>
              </li>
              <li>
                <a href="#section-7">Section 0</a>
              </li>
              <li>
                <a href="#section-8">Research Summary</a>
              </li>
              <li>
                <a href="#section-9">Application</a>
              </li>
            </Scrollspy>
          </ScrollspyStickyWrapper>
        </ScrollspyOuterWrapper>
        <TextWrapper>
          <Text>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Text>
        </TextWrapper>
      </Card>
    </>
  );
});

const Text = styled.p`
  width: 50%;
  margin: 0 15% 0 auto;
  ${fontFamily({ fontFamily: "karla" })}
  ${fontSize({ fontSize: ["20px", "24px", "20px"] })}
  ${lineHeight({ lineHeight: ["24px", "32px", "30px"] })}

  h1 {
    color: #625CDF;
    line-height: 45px;
    letter-spacing: -1px;
  }
`;

const TextWrapper = styled.div`
  display: inline-block;
  position: static;
  top: 0;
`;

const ScrollspyOuterWrapper = styled.div`
  position: absolute;
  height: 100%;
`;

const ScrollspyStickyWrapper = styled.div`
  ${fontFamily({ fontFamily: "karla" })}
  font-weight: 500;
  font-size: 20px;
  position: sticky;
  top: 25px;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style: none;
    border-right: 2px solid #191545;
    padding-right: 15px;
  }

  .activeScrollspy {
    text-decoration: underline;
    font-weight: 700;
  }
`;

const Li = styled.li`
  margin-bottom: 10px;
  margin-top: 10px;
`;
