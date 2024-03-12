import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
    
    body {
        background-color: #1E1E1E;
        // background-image: radial-gradient(circle at 100% -50px, #fff, #434343, #1E1E1E 50%);
        height: 100%;
        overflow-X: hidden;
    }
`