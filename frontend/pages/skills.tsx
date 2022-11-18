import { useState } from "react"
import Nav from "../components/Nav"
import { Yellow, Card, Name, TextWrapper } from "../components/Home"
import styled from "styled-components"
import { width, space, fontSize } from "../components/StyledSystem"
import SEO from "../components/SEO"

const skills = [
  {
    title: "Languages",
    items: [ {
      name: "JavaScript",
      highlight: true
    },
    {
      name: "TypeScript",
    },
    {
      name: "Node.js"
    },
    ]
  },
  {
    title: "Web Frameworks",
    items: [ {
      name: "React 18",
      highlight: true
    },
    {
      name: "Express.js",
    }
    ]
  },
  {
    title: "React Frameworks",
    items: [ {
      name: "Next.js",
      highlight: true
    },
    {
      name: "Gatsby",
      highlight: true
    }
    ],
  },
  {
    title: "Markup",
    items: [ {
      name: "HTML",
      highlight: true
    },
    {
      name: "Markdown"
    },
    {
      name: "XML"
    }
    ]
  },
  {
    title: "Styling",
    items: [ {
      name: "CSS",
      highlight: true
    },
    {
      name: "Chakra UI",
      highlight: true,
    },
    {
      name: "Styled Components",
    },
    {
      name: "SASS/SCSS"
    },
    {
      name: "postCSS"
    }
    ]
  },
  {
    title: "Web Optimization",
    items: [ {
      name: "Responsive Web Design",
      highlight: true,
    },
    {
      name: "Search Engine Optimization",
      highlight: true
    },
    {
      name: "Web Accessibility"
    },
    {
      name: "Web Performance",
      highlight: true
    },
    {
      name: "Browser Support"
    },
    {
      name: "Web Security"
    },
    ]
  },
  {
    title: "Noteworthy JavaScript Libraries",
    items: [
      {
        name: "React Static"
      },
      {
        name: "Passport.js"
      },
      {
        name: "React Router"
      },
      {
        name: "Sockets.IO"
      },
      {
        name: "Gulp"
      },
      {
        name: "Webpack"
      },
      {
        name: "Babel"
      },
      {
        name: "Eslint"
      }
    ]
  },
  {
    title: "Hardware",
    items: [ {
      name: "Raspberry Pi"
    },
    {
      name: "Arduino"
    },
    {
      name: "Neopixel LEDs"
    },
    {
      name: "NFC tags"
    },
    {
      name: "Sensors: Color, Distance, Push"
    },
    ]
  },
  {
    title: "Content Management Systems",
    items: [
      {
        name: "Sanity CMS",
        highlight: true,
      },
      {
        name: "netlifycms"
      },
      {
        name: "Wordpress"
      },
      {
        name: "Strapi",
      },

      {
        name: "Shopify",
        highlight: true
      }
    ]
  },
  {
    title: "Databases",
    items: [ {
      name: "MongoDB & Mongoose"
    },
    {
      name: "AWS S3"
    }
    ]
  },
  {
    title: "Collaboration",
    items: [ {
      name: "Git",
      highlight: true
    },
    {
      name: "Github & Gitlab",
    },
    {
      name: "Agile methodology"
    },
    {
      name: "Consuming designs (XD & Figma)"
    },
    ]
  },
  {
    title: "Deployment",
    items: [ {
      name: "Netlify",
      highlight: true,
    },
    {
      name: "Vercel",
      highlight: true,
    },
    {
      name: "Heroku"
    },
    {
      name: "Firebase"
    },
    {
      name: "AWS EC2, S3, & Lambdas"
    },
    {
      name: "Docker"
    }
    ]
  },
  {
    title: "Dev Environment",
    items: [ {
      name: "Arch Linux"
    },
    {
      name: "NPM"
    }
    ]
  },
  {
    title: "Data Serialization",
    items: [ {
      name: "JSON"
    },
    {
      name: "YAML"
    },
    {
      name: "TOML",
    }
    ]
  },
  {
    title: "Analytics",
    items: [ {
      name: "Google Analytics (Universal & GA4)"
    },
    {
      name: "HotJar"
    },
    {
      name: "DataDog API"
    }
    ]
  },
  {
    title: "Played with",
    items: [ {
      name: "Tensorflow.js"
    },
    {
      name: "Bash"
    },
    {
      name: "SQL & Postgres"
    },
    {
      name: "HAML"
    },
    {
      name: "Ruby"
    },
    {
      name: "Ruby on Rails"
    },
    ],
  },
  {
    title: "Other",
    items: [
      {
        name: "API's (creating & integrating)",
        highlight: true,
      }
    ]
  }
]

const UnfilteredSkills = () => {
  return <>{skills.map(({ title, items }) => (
    <Section key={title}>
      <H2>{title}</H2>
      <Ul>
        {items.map(({ name, highlight }) => (
          <Li key={name}>
            {highlight ?
              <Yellow>{name}</Yellow> :
              name
            }
          </Li>
        ))}
      </Ul>
    </Section>
  ))
  }</>
}

const FilteredSkills = () => {
  return (
    <>
      <Section>
        <Ul>
          {skills.map(({ items }) => (
            items.map(({ name, highlight }) => (
              highlight && <Li key={name}>{name}</Li>
            ))
          ))}
        </Ul>
      </Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
    </>
  )
}

const Skills = () => {
  const [ filtered, setFiltered ] = useState(true)
  // console.log({ filtered })

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
            * {filtered ? "Show all skills" : "Show key skills"}
          </Yellow>
        </Filter>
        <TextWrapper>
          <Wrapper>
            {
              filtered ?
                <FilteredSkills /> :
                <UnfilteredSkills />
            }
          </Wrapper>
        </TextWrapper>
      </Card>
    </>
  )
}

const Filter = styled.span`
  vertical-align: top;
  font-family: Karla;
  font-weight: 700;
  cursor: pointer;

  span::selection {
    background: transparent;
  }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 960px) {
    width: 80vw;
  }
`

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  ${space({ pt: 0, pr: 0, pb: [ "40px", "70px", "60px" ], pl: "10px" })}
  vertical-align: text-top;
`

const Li = styled.li``

const H2 = styled.h2`
  ${fontSize({ fontSize: [ "24px", "28px", "32px" ] })}
  ${space({ pb: [ "15px", "20px", "20px" ] })}
  margin: 0;
`

const Section = styled.div`
  ${width({ width: [ "100%", "45%", "33%" ] })}
  box-sizing: border-box;
`

export default Skills
