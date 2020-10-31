import styled from 'styled-components'

export const Container = styled.div`
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
