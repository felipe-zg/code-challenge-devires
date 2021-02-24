import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    font-size: 62.5%;

    @media only screen and (max-width: $bp-large) {
        font-size: 50%;
    }
}

body {
  font-family: system-ui, sans-serif;
  margin: 0;
  background-image: linear-gradient(to right bottom, #f00, #ff0);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
`;

export default GlobalStyle;
