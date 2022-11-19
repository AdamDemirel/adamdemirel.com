import { useState } from "react"
import { Box } from "@chakra-ui/react"
import SEO from "../components/SEO"
import PageProgress from "react-page-progress"
import Nav from "../components/Nav"
import { Name } from "./Home"
import Scrollspy from "react-scrollspy"
import { PortableText } from '@portabletext/react'

const Article = ({ content }: any) => {
  const [ open, setOpen ] = useState(false)

  // get this from sanity
  const title = "Things I recommend you buy and use."
  const path = "/property"

  return (
    <>
      <SEO
        title={`${title} - Writing - Adam Demirel's Personal Website`}
        description="Adam Demirel is a Software Developer from Sydney, working with the Web and Internet Of Things at Paper Moose. Some of his main skills are Javascript, React, HTML, Styled Components, Linux, Microcontrollers, and modern UI Theory. Learn more."
        path={`/${path}`}
      />
      <PageProgress color="#625cdf" height={5} />
      <Nav open={open} setOpen={setOpen} title={title} />
      <Card>
        <Name>{title}</Name>
        {/* <ScrollspyOuterWrapper open={open}>
          <ScrollspyStickyWrapper>
            {title === "Sleep." && (
              <Scrollspy
                items={[
                  "section-0",
                  "section-1",
                  "section-2",
                  "section-4",
                  "section-6",
                  "section-9",
                  "section-13",
                  "section-14",
                  "section-15",
                  "section-17"
                ]}
                currentClassName="activeScrollspy"
              >
                <li>
                  <a href="#section-0">Intro</a>
                </li>
                <li>
                  <a href="#section-1">1. Sufficient Sleep Duration</a>
                </li>
                <li>
                  <a href="#section-2">2. Regular Sleep/Wake Time</a>
                </li>
                <li>
                  <a href="#section-4">3. Correct Sleep Temperature</a>
                </li>
                <li>
                  <a href="#section-6">4. Correct Light Exposure</a>
                </li>
                <li>
                  <a href="#section-9">5. Absence Of Sound Pollution</a>
                </li>
                <li>
                  <a href="#section-13 ">6. Sleeping Position</a>
                </li>
                <li>
                  <a href="#section-14">7. Supplements / Nutrients</a>
                </li>
                <li>
                  <a href="#section-15">8. Sufficient Airflow</a>
                </li>
                <li>
                  <a href="#section-17">Other Alternative Interventions</a>
                </li>
              </Scrollspy>
            )}
            {title === "Job Satisfaction." && (
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
            )}
            {title === "Happiness." && (
              <Scrollspy
                items={[
                  "section-0",
                  "section-1",
                  "section-8",
                  "section-16",
                  "section-17",
                  "section-18",
                  "section-23",
                  "section-30",
                  "section-37",
                  "section-38",
                  "section-45",
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
                  <a href="#section-0">Intro</a>
                </li>
                <li>
                  <a href="#section-1">Ancient Greek History</a>
                </li>
                <li>
                  <a href="#section-8">What is Happiness?</a>
                </li>
                <li>
                  <a href="#section-16">Minimizing Pleasures</a>
                </li>
                <li>
                  <a href="#section-17">Maximizing Pains</a>
                </li>
                <li>
                  <a href="#section-18">Maximizing Pleasure</a>
                </li>
                <li>
                  <a href="#section-23">Remembered Utility</a>
                </li>
                <li>
                  <a href="#section-30">Experienced Utility</a>
                </li>

                <li>
                  <a href="#section-37">Predicted Utility</a>
                </li>

                <li>
                  <a href="#section-38">Minimizing Pains</a>
                </li>
                <li>
                  <a href="#section-45">Improving Hedonic Setpoint</a>
                </li>
                <li>
                  <a href="#section-46">Summary</a>
                </li>
                <li>
                  <a href="#section-47">Compressed Summary</a>
                </li>
                <li>
                  <a href="#section-48">Ultra Compressed Summary</a>
                </li>
              </Scrollspy>
            )}
          </ScrollspyStickyWrapper>
        </ScrollspyOuterWrapper> */}
        <TextWrapper>
          <Text>
            <PortableText
              value={content}
              // components={/* optional object of custom components to use */}
            />
          </Text>
        </TextWrapper>
      </Card>
    </>
  )
}

const Text = ({ children }) => <Box
  w={[ "50%", "100%" ]}
  m="0 auto"
  boxSizing="border-box"
  fontFamily="karla"
  fontSize={[ "20px", "20px", "20px" ]}
  lineHeight={[ "24px", "30px", "30px" ]}
  maxW={[ '550px', '550px', 'unset' ]}

  sx={{
    'h1': {
      color: '#625CDF',
      lineHeight: '45px',
      letterSpacing: '-1px',
    }
  }}
>{children}</Box>

const TextWrapper = ({ children }: any) => <Box maxW="100%"
  display="inline-block"
  position="static"
  top={0}
  w={[ '100%', '100%', 'unset' ]}
  sx={{ 'wordWrap': [ 'break-word', 'unset' ] }}
  pl={[ 'auto', '200px', 'auto' ]}
>{children}</Box>

// const ScrollspyOuterWrapper = styled.div`
//   position: absolute;
//   height: 100%;

//   @media (max-width: 600px) {
//     display: none;
//     display: ${({ open }) => (open ? "block" : "none")};
//   }

//   @media (max-width: 960px) {
//     height: auto;
//     position: static;
//   }

//   @media (max-width: 600px) {
//     position: sticky;
//     top: 0px;
//     background-color: white;
//     top: 45px;
//   }
// `

// const ScrollspyStickyWrapper = styled.div`
//   ${fontFamily({ fontFamily: "karla" })}
//   ${fontSize({ fontSize: [ "16px", "20px", "14px" ] })}
//   font-weight: 500;
//   padding-top: 8px;

//   @media (min-width: 601px) {
//     position: sticky;
//     top: 25px;
//   }

//   @media (max-height: 670px) {
//     position: static;
//   }

//   a {
//     text-decoration: none;
//     color: inherit;

//     &:hover {
//       text-decoration: underline;
//     }
//   }

//   ul {
//     list-style: none;
//     padding-right: 20px;
//     border-bottom: 2px solid #191545;
//     padding-bottom: 20px;

//     @media (min-width: 961px) {
//       border-right: 2px solid #191545;
//       border-bottom: none;
//     }

//     @media (max-width: 960px) {
//       padding-left: 0;
//     }
//   }

//   .activeScrollspy {
//     text-decoration: underline;
//     font-weight: 700;
//   }

// `

const Li = ({ children }) => <Box as="li" mt="10px">{children}</Box>

const Card = ({ children }: any) => <Box w="auto" top={[ "20px", "10%", "10%" ]} left={[ "unset", "unset", "0" ]} p="15px" m={[ "10px", "10px", "auto" ]} right={0} maxW="1250px" fontWeight={400} zIndex={-1} position={[ 'static', 'static', 'absolute' ]} color="#191545" bgColor="white" borderRadius="5px" sx={{
  // styles footnotes
  "card": {
    bgColor: "#EFF8FF",
    padding: "0 30px",
    fontSize: "16px",
  },
  // logic for realigning the table of contents from top to side
  "td": {
    border: "1px solid black",
    boxSizing: "border-box",
  },
  "table": {
    borderSpacing: 0,
  }
}}>{children}</Box>

export { Article }
