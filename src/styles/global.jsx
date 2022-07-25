import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font-family: 'Open Sans', sans-serif;
    }

    body{
        background-color: #FEFBF6;
    }

    .App{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        position: relative;
    }
`