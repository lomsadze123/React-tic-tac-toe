import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  h2,button {
    font-weight: 700;
  }
  h3 {
    font-weight: 400;
  }
`;

export default GlobalStyle;
