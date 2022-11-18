import styled from "styled-components"
import Nav from "../components/Nav"
import Image from 'next/image'

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

const Child = styled.div`
  max-width: 600px;

  @media (max-width: 960px) {
    * {
      padding: 0 50 px;
      margin: 0 auto;
      display: block;
      max-width: 90%;
    }
  }
`

const Title = styled.h1`
  font-family: Karla;
  text-align: center;
  padding-top: 30px;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`

const Custom404 = () => (
  <>
    <Nav />
    <Container>
      <Child>
        <Image src="/images/404.png" alt="cartoon character holding a question mark sign" width={500} height={500} />
        <Title>Sorry Amigo, this page doesn&apos;t exist.</Title>
      </Child>
    </Container>
  </>
)

export default Custom404
