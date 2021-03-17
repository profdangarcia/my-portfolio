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

  .bouncing {
    animation-name: bounce;
    animation-timing-function: ease;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  .great-bouncing {
    --high: -60px;
    --low: -7px;
  }

  .short-bouncing {
    --high: -5px;
    --low: -2px;
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(var(--high));
    }
    50% {
      transform: scale(1, 1) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(var(--low));
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  .shimmer {
    background: #f6f7f8;
    background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
    );
    background-repeat: no-repeat;
    background-size: 400px 350px;
    animation: placeholderShimmer 1s linear infinite;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }
`
