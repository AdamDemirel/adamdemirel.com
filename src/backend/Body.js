import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: Karla;
    font-style: normal;
    font-display: fallback;
    font-weight: 700;
    src:
      url("/fonts/karla-bold.woff2") format("woff2"),
      url("/fonts/karla-bold.woff") format("woff");
  }

  @font-face {
    font-family: Karla;
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src:
      url("/fonts/karla-regular.woff2") format("woff2"),
      url("/fonts/karla-regular.woff") format("woff");
  }

  @font-face {
    font-family: hello;
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src:
      url("/fonts/hello.woff2") format("woff2");
  }

  body {
    margin: 0;
  }

  html * {
    &::selection {
      background-color: #191545;
      color: white;
    }

    img {
      max-width: 100%;
    }

    // clears defaults
    ol li p,
    ul li p {
      margin: 0;
    }

    // border: 1px solid red;

    overflow-wrap: break-word;
    box-sizing: border-box;

  }


  // body::-webkit-scrollbar,
  // .skills::-webkit-scrollbar {
  //   width: 10px; }
  // body::-webkit-scrollbar-thumb,
  // .skills::-webkit-scrollbar-thumb {
  //   background: #666;
  //   border-radius: 20px; }
  // body::-webkit-scrollbar-track,
  // .skills::-webkit-scrollbar-track {
  //   background: #ddd;
  //   border-radius: 20px; }


    aside {
      position: relative;
    }
`;
