import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, input, button {
        font-family: 'Montserrat', sans-serif;
    }
    body {
        background: #E5E5E5;
    }
`