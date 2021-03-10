import styled from 'styled-components'

export const Container = styled.div`
  background: #000;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/banner-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  p {
    font-size: 32px;
    margin-bottom: 20px;
    color: #fff;
    font-family: Montserrat, serif;
    font-weight: 700;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.4);
  }

  @media (min-width: ${props => props.theme.screens.medium}) {
    p {
      font-size: 75px;
    }
  }
`

export const KeepGoingButton = styled.a`
  color: #fff;
  font-size: 24px;
  height: 120px;
  display: flex;
  align-items: flex-end;

  @media (min-width: ${props => props.theme.screens.medium}) {
    font-size: 40px;
  }
`
