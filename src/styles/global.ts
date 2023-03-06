import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-title']};
    -webkit-font-smoothing: antialiased;
  }

  body, input , button {
    font-family: 'Ballo 2', cursive;
    line-height: 1.3;
    font-weight: bold;
    font-size: 1.125rem;
  }

  input {
    background: ${(props) => props.theme['base-input']};
  }

  input:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`
