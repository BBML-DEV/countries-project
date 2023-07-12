import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Nunito Sans", sans-serif;
    }

    body{
        background-color: ${({theme}) => theme.colors["light-mode-background"]};
        color: ${({theme}) => theme.colors['light-mode-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 300 ${({ theme }) =>
          theme.fontSize.homeItens}, "Nunito Sans, sans-serif";
        line-height: 160%;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
    
    button{
        border: none;
        cursor: pointer;
    }
`