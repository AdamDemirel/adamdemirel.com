import '../styles/globals.css'
import { ThemeProvider } from "styled-components" // Provi
import { GridLoader } from "react-spinners"
import React, { Suspense } from "react"
import theme from "../components/theme"
import styled from "styled-components"
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import {  } from "@chakra-ui/react"

const SpinnerWrapper = styled.div`
  display: block;
  position: absolute;
  top: calc(50% - 75px);
  left: calc(50% - 75px);
`

const theme2 = extendTheme({
  // colors: {
  //   brand: {
  //     100: "#f7fafc",
  //     // ...
  //     900: "#1a202c",
  //   },
  // },
  styles: {
    global: {
      "*": {
        "&::selection": {
          bgColor: "#191545",
          color: "white",
        },
        /* // clears defaults */
        "ol li p, ul li p": { m: 0 },
        overflowWrap: "break-word",
        boxSizing: "border-box"
      },
      body: {
        m: 0,
      },
      img: {
        maxW: "100%"
      },
      aside: {
        position: "relative"
      },

    },
  }
})

const Spinner = () => (
  <SpinnerWrapper>
    <GridLoader size={20} color="#2368A2" />
  </SpinnerWrapper>
)

function MyApp({ Component, pageProps }) {
  return (
    <Suspense fallback={<Spinner />}>
      <ChakraProvider theme={theme2} resetCSS={false}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ChakraProvider>
    </Suspense>
  )
}

export default MyApp
