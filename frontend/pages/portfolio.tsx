import { Card, Name, TextWrapper } from "../components/Home"
import {  Heading, Text } from "@chakra-ui/react"
import Link from 'next/link'
import Nav from "../components/Nav"
import SEO from "../components/SEO"
import Image from "next/image"

import OzharvestImg from "../public/images/ozharvest.png"
console.log("OzharvestImg", OzharvestImg)

const Portfolio = props => {
  return (
    <>
      <SEO
        title="Portfolio - Adam Demirel's Personal Website"
        description="Adam Demirel is a Software Developer from Sydney, working with the Web and Internet Of Things at Paper Moose. Some of his main skills are Javascript, React, HTML, Styled Components, Linux, Microcontrollers, and modern UI Theory. Learn more."
        path="/portfolio"
      />
      <Nav />
      <Card>
        <Name>Portfolio.</Name>
        <TextWrapper>
          <p>
            I&apos;m a full-stack software engineer with 4 years of experience developing webapps, experiences, and interfaces for a variety of projects.
          </p>
          <p>
            I&apos;ve worked across the stack from frontend to backend, from small screens to large.
          </p>
          <p>
            My focus is on developing webapps that are functional, meet client requirements, performant, secure, mobile-responsive, accessible, SEO friendly, maintainable, using Analytics, which provide both a good developer and user experience.
          </p>
          <p>
            I&apos;ve setup Content Management Systems (both headless like Strapi and headed like Wordpress), cloud services on AWS, small AI tools for image recognition, done User Experience testing, designing, a lot of UI development, SEO optimization, prototyped a chatbot, and played around with VR experiences.
            I&apos;ve also built interfaces using Rasperry Pi&apos;s and Arduino&apos;s using touch sensors, ultrasound sensors, LEDs, and NFCs. Here&apos;s a full <Link href="/skills">list of my skills</Link>.
          </p>
          <p>
            Some of my main web work can be seen below.
          </p>
          <hr />
          <Heading size="h1" lineHeight={1}>Experience</Heading>
          <Text as="strong">Next Position</Text>
          <Text>4 days per week, fully remote. Ideally a product company, rather than an agency. Interested in the health tech space. JavaScript based tech steck. <a href="https://www.linkedin.com/in/adam-demirel/">Reach out</a> if you think I might be interested 🔥.</Text>
          <Text as="strong" lineHeight={1} my={3}>Aug 2021-Present - <a href="https://dotdev.com.au/">DotDev</a> -
          Mid Full Stack Developer</Text>
          <Text>Bug fixing and feature creation for 20+ projects in the company portfolio, requiring debugging skills and direct client communication. Most projects being a mix of React, Gatstby, Shopify, API&apos;s, and liquid. Recently the lead developer on the large 4 month rebuild of <a href="https://goodnessme.gatsbyjs.io/">GoodnessMe</a>.</Text>
          <Text as="strong" lineHeight={1} my={3}>Mar 2019-Aug 2021 - <a href="https://papermoose.com/">Paper Moose</a> -
          Software Engineer</Text>
          <Text>One of two developers responsible for delivering 20+ technical projects, independently, or together. Variety of projects listed below.</Text>
          <Text as="strong" lineHeight={1} my={3}>Feb 2019 - <a href="https://www.readytech.com.au/">JobReady</a> -
          Software Engineering Intern</Text>
          <Text>Built a custom package to integrate JobReady&apos;s platform metrics into an analytics dashboard.</Text>
          <hr />
          <Heading size="h1">Projects</Heading>
          <h1><a href="https://ozharvest.org">OzHarvest.org</a></h1>
          <p>
            Led the complete frontend construction over 3 months for the giant rebuild of the popular not-for-profit OzHarvest, with over 40k month on month visitors.
          </p>
          <p>
            The backend is a regular Wordpress CMS, using an ACF module system, and the frontend is templated with Nunjucks. Integrated with third party API&apos;s such as InfoExchange, Salesforce, and Google Analytics. Hosted on AWS EC2.
          </p>
          <img src="/images/ozharvest.png" alt="ozharvest.org homepage hero" />
          <hr />
          <h1>Coke Recycling Bins</h1>
          <p>On behalf of another digital agency, our agency built &ldquo;smart bins&rdquo; for CocaCola to be used at the new Sydney Cricket Ground at Moore Park.</p>
          <p>We contracted the physical build of the bin, and I built a bottle detection system which uses color sensors to detect if a coke or non-coke bottle has been placed in the bin, programmatically showing a different screen to the user, and lighting up LEDs. A signup form for an EDM was used to collect information, and the signup form plus thank you screen were both built in React.</p>
          <img src="/images/coke1.jpg" />
          <img src="/images/coke2.jpg" />
          <img src="/images/coke3.jpg" />
          <hr />
          <h1><a href="https://strategy.mlcsyd.nsw.edu.au/">MLC School Strategic Plan</a></h1>
          <p>Pair programmed on the frontend of the React build of this Strategic Plan website for the Sydney girls school MLC. Utilises modern scroll animations, and hosted on Netlify.</p>
          <video width="100%" controls>
            <source src="/videos/mlc.mp4" type="video/mp4"></source>
          </video>
          <hr />
          <h1><a href="https://www.californiascentspromotion.com.au/winners">California Scents Competition</a></h1>
          <p>Developed a small microsite for the car refreshener company California Scents for users to enter a competition, and linked to from the labels of their products. Built using nextJS with React and hosted on Netlify.</p>
          <img src="/images/caliscents.png" />
          <hr/>
          <h1><a href="https://2019annualreport.ozharvest.org/food-rescue">OzHarvest 2019 Annual Report</a></h1>
          <p>Implemented the frontend of this creative annual report which uses a slider to hide and show recipes along with financial information, as well as a unique interactive clickable SVG.</p>
          <p>
            It uses a statically generated React frontend, using Styled Components, and hosted on Netlify.
          </p>
          <video width="100%" controls>
            <source src="/videos/2019-slider.mp4" type="video/mp4"></source>
          </video>
          <video width="100%" controls>
            <source src="/videos/2019-popup.mp4" type="video/mp4"></source>
          </video>
          <hr />
          <h1><a href="https://careerquiz.uts.edu.au/?page=q5">UTS Career Quiz</a></h1>
          <p>
            Built this creative career quiz for UTS, following designer mockups and implementing modern animations. Built with React and Styled Components, and hosted on Netlify.
          </p>
          <video width="100%" controls>
            <source src="/videos/utsquiz.mp4" type="video/mp4"></source>
          </video>
          <hr />
          <h1>Wotif Truck</h1>
          <p>
            Pair programmed on the build of this creative interface for the Australia travel company Wotif. We contracted the build of the truck to a third party and designed and implemented the interface. The truck uses multiple sensors (ultrasound, touch, distance) etc to allow users to interact with buttons and toggles living on the side of a truck. The truck drives around Australia to local festivals and continues to this day.
          </p>
          <p>
            Based on the user inputs a list of travel recommendations is programmatically shown on the screen by flipping through images in a slot-machine like fashion.
          </p>
          <p>
            We used Arduinos for the wiring of the inputs and designed the frontend with React.
          </p>
          <img src="/images/wotif1.jpg" />
          <img src="/images/wotif2.jpg" />
          <img src="/images/wotif3.jpg" />
          <hr />
          <h1><a href="https://enter-the-biosphere.visitnoosa.com.au/">Enter The Biosphere</a></h1>
          <p>
            Pair programmed on the react frontend for this site for the travel company Noosa. Hosted on Netlify. Uses Styled Components.
          </p>
          <video width="100%" controls>
            <source src="/videos/noosa.mp4" type="video/mp4"></source>
          </video>
          <hr />
          <h1><Link href="/">adamdemirel.com</Link></h1>
          <p>Designed the clean UI for and built the full stack for this portfolio. Developed with react-static, styled components, and hosted on Netlify. Uses HotJar analytics.</p>
          <img src="/images/portfolio.png" alt="homepage of adamdemirel.com" />
          <hr />
        </TextWrapper>
      </Card>
    </>
  )
}

export default Portfolio
