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
    margin-bottom: 10px;
    color: #fff;
    font-family: Montserrat, serif;
    font-weight: 700;
  }

  @media (min-width: ${props => props.theme.screens.medium}) {
    h1 {
      font-size: 75px;
      margin-bottom: 20px;
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
  font-size: 24px;
  transition: 0.2s ease-in;

  &:hover {
    opacity: 0.5;
  }
`
