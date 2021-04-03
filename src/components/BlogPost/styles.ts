import styled from 'styled-components'

export const Container = styled.main`
  min-height: 70vh;
  padding: 30px 0;
`

export const PostBody = styled.article`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  #post-content h2 {
    margin: 30px 0 15px;
    color: ${props => props.theme.colors.textTitle};
  }

  #post-content h3,
  h4 {
    margin: 15px 0;
    color: ${props => props.theme.colors.textTitle};
  }

  #post-content p {
    line-height: 1.75rem;
  }

  #post-content ul {
    margin: 10px 0;
  }

  #post-content a {
    text-decoration: none;
    font-weight: bold;
  }

  #post-content p + p {
    margin-top: 12px;
  }

  #post-content code {
    background: ${props => props.theme.colors.primary};
    word-wrap: break-word;
    box-decoration-break: clone;
    padding: 0.1rem 0.3rem 0.2rem;
    border-radius: 0.2rem;
    font-weight: bold;
  }

  #post-content pre {
    background: rgba(2, 2, 2, 0.7);
    border-radius: 4px;
    padding: 10px;
    color: white;
    margin: 15px 0;
  }

  #post-content p img {
    width: 100%;
    max-width: 300px;
  }

  #post-content pre code {
    font-weight: 400;
    display: block;
    background: none;
    white-space: pre;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    max-width: 100%;
    min-width: 100px;
    padding: 0;
  }

  #post-content ul {
    margin-left: 30px;
    list-style: '☕   ';
  }

  #post-content li + li {
    margin-top: 10px;
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
export const CommentSection = styled.div`
  width: 100%;
  margin-top: 40px;
`
