import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Karla";
    src: url("/fonts/Karla-Bold.woff") format("woff");
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: "Karla";
    src: url("/fonts/Karla-Regular.woff") format("woff");
    font-style: normal;
    font-weight: 400;
  }

  body {
    margin: 0;
  }

  html * {
    &::selection {
      background-color: #191545;
      color: white;
    }
  }


  body::-webkit-scrollbar,
  .skills::-webkit-scrollbar {
    width: 10px; }
  body::-webkit-scrollbar-thumb,
  .skills::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 20px; }
  body::-webkit-scrollbar-track,
  .skills::-webkit-scrollbar-track {
    background: #ddd;
    border-radius: 20px; }

  // littlefoot styles
    .littlefoot-footnote__button {
      background-color: white;
      cursor: pointer;
      padding: 0;
      border: 0;
      color: blue;
    }

    aside {
      position: relative;
    }

    .littlefoot-footnote__wrapper {
      position: absolute;
      top: -20px;
      left: 60px;
      padding-left: 10px;
      padding-right: 10px;
      border: 1px solid black;
      background-color: white;
      max-width: none !important;
    }
`;
