import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: Roboto;
    font-weight: regular;
    color: #242d3b;
}

body {
    width: 100%;
    height: 100vh;
}

`;
