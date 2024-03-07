import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
    
    body {
        background-color: #171622;
        height: 100vh;
    }
`