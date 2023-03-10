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
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
    font-weight: bold;
    font-size: 1.125rem;
  }

  input {
    background: ${(props) => props.theme['base-input']};

    &:focus {
      outline: transparent;
      box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
    }
  }

 
`
