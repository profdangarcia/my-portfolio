import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  border-bottom: 3px solid #333;

  &:hover {
    img {
      filter: brightness(0.8);
    }
  }
`
export const PostImage = styled.img`
  transition: 0.2s ease-in-out;
  height: 261px;
  width: 100%;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
`

export const PostData = styled.div`
  padding: 10px 5px 5px;
`

export const PostTitle = styled.h2`
  color: ${props => props.theme.colors.textTitle};
  margin: 25px 0 13px 0;
  font-family: 'Montserrat', sans-serif;
  min-height: 50px;
`

export const PostDescription = styled.p`
  margin-bottom: 20px;
  min-height: 63px;
`

export const PostAuthor = styled.span`
  font-size: 11px;
  color: #b9b9b9;
`
