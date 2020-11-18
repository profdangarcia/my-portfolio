import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 13px Poppins, sans-serif;
    -webkit-font-smoothing: antialiased;

    @media (min-width: ${props => props.theme.screens.medium}) {
      font-size: 14px;
    }
  }

  button {
    cursor: pointer;
    background: none;
    border: 0;
    outline: none;
  }
`
