import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme/Theme.ts";




export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.6;
        min-width: 360px;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.button};
        cursor: pointer;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;

        line-height: 1.5;
        color: #393939;
    }

    ul {
        list-style: none;
    }

    input,textarea {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 13px;
        line-height: 136%;
        background-color: ${theme.colors.inputBg};

        border-radius: 9px;
        border: 0;
    }

    button {
        background-color: unset;
        border: none;
        cursor: pointer;
    }

    // section:nth-of-type(even){
    //     background-color: ${theme.colors.primaryBg};
    // } 
    // section:nth-of-type(odd){
    //     background-color: ${theme.colors.secondaryBg};
    // }
`