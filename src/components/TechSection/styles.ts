import styled from 'styled-components'

export const Container = styled.div`
  padding: 45px 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${props => props.theme.screens.medium}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.textTitle};
  text-align: center;
  padding: 20px 0;

  svg {
    font-size: 45px;
  }

  @media (min-width: ${props => props.theme.screens.medium}) {
    justify-content: space-between;
    padding: 0;
    height: 180px;
  }
`

export const InfoBox = styled.div`
  @media (min-width: ${props => props.theme.screens.medium}) {
    height: 150px;
  }
`

export const TechTitle = styled.h2`
  font-size: 13px;
  letter-spacing: 1px;
  margin: 15px 0;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;

  @media (min-width: ${props => props.theme.screens.medium}) {
    font-size: 15px;
  }
`

export const TechDescription = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 13px;
  line-height: 20px;
  max-width: 400px;

  @media (min-width: ${props => props.theme.screens.medium}) {
    font-size: 15px;
    max-width: 230px;
  }
`
