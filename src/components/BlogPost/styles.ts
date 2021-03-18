import styled from 'styled-components'

export const Container = styled.main`
  min-height: 70vh;
  padding: 30px 0;
`

export const PostBody = styled.article`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  h2,
  h3,
  h4 {
    margin: 15px 0;
    color: ${props => props.theme.colors.textTitle};
  }

  @media (min-width: ${props => props.theme.screens.tablet}) {
    font-size: 16px;
  }
`

export const PostTitle = styled.h1`
  color: ${props => props.theme.colors.textTitle};
  font-size: 22px;
  @media (min-width: ${props => props.theme.screens.tablet}) {
    font-size: 30px;
  }
`

export const PostAuthor = styled.p`
  color: #b7b7b7;
  font-size: 11px;
  @media (min-width: ${props => props.theme.screens.tablet}) {
    font-size: 12px;
  }
`

export const PostImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 20px auto;
  border-radius: 4px;
`
