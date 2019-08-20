import React from "react";
import { withRouteData } from "react-static";
import Nav from "../components/Nav";
import { Name } from "../pages/home";
import styled from "styled-components";
import { top, left, space, fontFamily, fontSize, lineHeight } from "../backend/StyledSystem";
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
                "section-10",
                "section-15",
                "section-16",
                "section-17",
                "section-18",
                "section-22",
                "section-29",
                "section-30",
                "section-32",
                "section-38",
                "section-43",
                "section-44",
                "section-45",
                "section-46",
                "section-47",
                "section-49",
                "section-50",
                "section-55",
                "section-58",
                "section-63",
                "section-64",
                "section-65",
                "section-66",
                "section-68",
                "section-69"
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
                <a href="#section-10">1.3 Extending the JCM</a>
              </li>

              <Li>
                <a href="#section-15 ">2. Social Characteristics</a>
              </Li>
              <li>
                <a href="#section-16">2.1 Social Information Processing</a>
              </li>
              <li>
                <a href="#section-17">2.2 Interdependence</a>
              </li>
              <li>
                <a href="#section-18">2.3 Feedback from Others</a>
              </li>
              <Li>
                <a href="#section-22">3. Environment Characteristics</a>
              </Li>
              <Li>
                <a href="#section-29">4. Worker Characteristics</a>
              </Li>
              <li>
                <a href="#section-30">4.1 Genetics</a>
              </li>
              <li>
                <a href="#section-32">4.2 The Big Five Personality Traits</a>
              </li>
              <li>
                <a href="#section-38">4.3 Core Self-Evaluations</a>
              </li>
              <li>
                <a href="#section-43">4.4 Affective Disposition</a>
              </li>

              <Li>
                <a href="#section-44">5. Person-Environment Fit</a>
              </Li>
              <li>
                <a href="#section-45">5.1 Myers Briggs</a>
              </li>
              <li>
                <a href="#section-46">5.2 Holland Codes</a>
              </li>
              <li>
                <a href="#section-47">5.3 Values in Action</a>
              </li>

              <Li>
                <a href="#section-49">6. Other</a>
              </Li>
              <li>
                <a href="#section-50">6.1 Income</a>
              </li>
              <li>
                <a href="#section-55">6.2 Organisation Size</a>
              </li>
              <li>
                <a href="#section-58">6.3 Employment Type</a>
              </li>
              <li>
                <a href="#section-63">6.4 Commute Time</a>
              </li>

              <Li>
                <a href="#section-64">7. Experience Sampling Method</a>
              </Li>
              <li>
                <a href="#section-65">8. Research Summary</a>
              </li>
              <li>
                <a href="#section-66">9. Application</a>
              </li>
              <li>
                <a href="#section-68">10. Conclusion</a>
              </li>
              <li>
                <a href="#section-69">11. Ultra Compressed Conclusion</a>
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
  ${fontSize({ fontSize: ["20px", "20px", "20px"] })}
  ${lineHeight({ lineHeight: ["24px", "30px", "30px"] })}

  @media (max-width: 960px) {
    width: 100%;
  }

  @media (min-width: 601px) and (max-width: 960px) {
    max-width: 550px;
  }



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

  @media (max-width: 600px) {
    width: 100%;
    word-wrap: break-word;
  }
  @media (min-width: 601px) and (max-width: 960px) {
    width: 100%;
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

@media(max-width: 960px) {
  right: unset;
  position: static;

}
`;
