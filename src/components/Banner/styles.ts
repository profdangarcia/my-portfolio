import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 32px;
    margin-bottom: 20px;
    color: #fff;
    font-family: Montserrat, serif;
    font-weight: 700;
  }

  @media (min-width: ${props => props.theme.screens.medium}) {
    h1 {
      font-size: 75px;
    }
  }
`

export const SocialDiv = styled.div`
  & a:not(:last-child) {
    margin-right: 30px;
  }
`

export const SocialLink = styled.a`
  color: #fff;
  font-size: 16px;
  transition: 0.2s ease-in;

  &:hover {
    opacity: 0.5;
  }

  @media (min-width: ${props => props.theme.screens.medium}) {
    font-size: 24px;
  }
`
export const KeepGoingButton = styled.a`
  color: #fff;
  font-size: 24px;
  height: 120px;
  display: flex;
  align-items: flex-end;

  svg {
    animation-name: bounce;
    animation-timing-function: ease;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  @media (min-width: ${props => props.theme.screens.medium}) {
    font-size: 40px;
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-60px);
    }
    50% {
      transform: scale(1, 1) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(-7px);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }
`
