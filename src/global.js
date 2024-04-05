import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
    
    body {
        // background-color: #1E1E1E;
        height: 100vh;
        overflow-X: hidden;

        background: var(--bg-pattern);
        background-color: #131313;
        background-size: 20px 20px;
    }
`