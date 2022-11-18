import SEO from "../components/SEO"
import Nav from "../components/Nav"
import { Card, Name, TextWrapper, Span, Blue, Purple, Links, Li, A, Moose, Yellow, Heading4, Heading5, } from "../components/Home"

export default function Home() {
  return (
    <>
      <SEO
        title="Adam Demirel's Personal Website"
        description="Adam Demirel is a Software Engineer from Sydney, developing for the web."
        path="/"
      />
      <Nav />
      <Card>
        <Name>Adam Demirel.</Name>
        <TextWrapper>
          <Span>
              Hey, I&apos;m Adam <span role="image">👋</span>. I&apos;m a <Yellow>Software Engineer</Yellow> from Sydney, developing for the Web.
          </Span>
          <Span>
              I&apos;m passionate about the power of computers and technology to
              improve the world, with a particular{" "}
            <Blue> interest in biotech and health</Blue>.
          </Span>
          <Span>
              I&apos;ve got a{" "}
            <Purple>background in neuroscience and philosophy</Purple>, and a
              curiosity about everything.
          </Span>

          <Span>
              Outside of work, I spend my time <Moose>doing jiujitsu</Moose>, <Heading4>rock-climbing</Heading4>, with my
              loved ones, or <Heading5>learning</Heading5> about whatever my current
              fascination is.
          </Span>
        </TextWrapper>
        <Links>
          <Li>
            <A to="https://twitter.com/AdamDemirel">Twitter</A>
          </Li>{" "}
            /{" "}
          <Li>
            <A to="https://www.linkedin.com/in/adam-demirel">LinkedIn</A>
          </Li>{" "}
            /{" "}
          <Li>
            <A to="https://github.com/AdamDemirel">Github</A>
          </Li>{" "}
        </Links>
      </Card>
    </>
  )
}
