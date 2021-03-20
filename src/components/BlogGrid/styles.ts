import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: minmax(min-content, max-content);
  grid-gap: 20px;
  min-height: 75vh;
  padding: 15px 0;
  min-height: 75vh;

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }
`

export const Title = styled.h1`
  text-align: right;
  color: ${props => props.theme.colors.textTitle};
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 26px;

  @media (min-width: ${props => props.theme.screens.tablet}) {
    font-size: 36px;
  }
`

export const Description = styled.h3`
  text-align: right;
  font-size: 16px;
  margin-top: 15px;

  @media (min-width: ${props => props.theme.screens.tablet}) {
    font-size: 18px;
  }
`
