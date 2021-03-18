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
  text-align: center;
  color: ${props => props.theme.colors.textTitle};
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
`
