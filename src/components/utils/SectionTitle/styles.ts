import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 23px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: ${props => props.theme.colors.textTitle};

  @media (min-width: ${props => props.theme.screens.tablet}) {
    font-size: 32px;
  }
`

export const Description = styled.p`
  color: ${props => props.theme.colors.text};
  @media (min-width: ${props => props.theme.screens.tablet}) {
    font-size: 16px;
  }
`
