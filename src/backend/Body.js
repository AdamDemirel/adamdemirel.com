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
    box-sizing: border-box;


  }

  html * {
    &::selection {
      background-color: #191545;
      color: white;
    }
  }

  canvas {
    display: block;
    vertical-align: bottom;
  } /* ---- particles.js container ---- */
  #particles-js {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    background-image: url("");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  } /* ---- stats.js ---- */
  .count-particles {
    background: #000022;
    position: absolute;
    top: 48px;
    left: 0;
    width: 80px;
    color: #13e8e9;
    font-size: 0.8em;
    text-align: left;
    text-indent: 4px;
    line-height: 14px;
    padding-bottom: 2px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
  }
  .js-count-particles {
    font-size: 1.1em;
  }
  #stats,
  .count-particles {
    -webkit-user-select: none;
    margin-top: 5px;
    margin-left: 5px;
  }
  #stats {
    border-radius: 3px 3px 0 0;
    overflow: hidden;
  }
  .count-particles {
    border-radius: 0 0 3px 3px;
  }
`;
