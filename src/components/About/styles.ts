import styled from 'styled-components'

interface AnimateProps {
  animate: boolean
}

export const Container = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.primary};
  padding-top: 60px;
  font-family: Montserrat, sans-serif;
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${props => props.theme.screens.tablet}) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
`

export const DevPicture = styled.img<AnimateProps>`
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 6px;
  transition: 1s ease-in;
  transform: ${props =>
    props.animate ? 'translateX(0)' : 'translateX(-1000px)'};

  @media (min-width: ${props => props.theme.screens.medium}) {
    width: 700px;
    max-width: 100%;
    margin-right: 100px;
  }
`
export const AboutContainer = styled.div<AnimateProps>`
  padding: 30px 15px;
  transition: 1s ease-in;
  opacity: ${props => (props.animate ? '1' : '0')};
`

export const AboutTitle = styled.h2`
  font-weight: 500;
  font-size: 23px;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.textTitle};

  @media (min-width: ${props => props.theme.screens.medium}) {
    font-size: 32px;
  }
`

export const AboutText = styled.p`
  margin-bottom: 15px;
  color: ${props => props.theme.colors.text};
  font-size: 13px;
  line-height: 24px;

  @media (min-width: ${props => props.theme.screens.medium}) {
    font-size: 16px;
    max-width: 700px;
  }
`
