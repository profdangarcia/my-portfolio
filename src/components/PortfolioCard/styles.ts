import styled from 'styled-components'
interface StyleProps {
  available: boolean
}

export const Container = styled.div`
  position: relative;
  height: 250px;
  background: ${props => props.theme.colors.background};
  display: flex;
  width: 420px;
  margin: 25px;
  border-radius: 6px;

  &:hover > div:first-child {
    width: 150px;
    height: 150px;
    left: -75px;
    top: calc(50% - 75px);
    transition: 0.5s ease-in-out;
  }

  @media (max-width: ${props => props.theme.screens.tablet}) {
    flex-direction: column;
    height: auto;

    &:hover > div:first-child {
      width: 100%;
      height: 200px;
      left: 0;
      top: 0;
    }
  }
`

export const OpenSrcFlag = styled.div`
  position: absolute;
  right: 0;
  top: 15px;
  background: #d5137f;
  z-index: 2;
  width: 120px;
  height: 30px;
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 4% 50%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
  font-weight: 700;
  transition: 0.2s ease-in-out;

  &:hover {
    background: #b00765;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`

export const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s ease-in-out;
  background: ${props => props.theme.colors.background};
  border-radius: 6px;
  border: 2px solid ${props => props.theme.colors.background};

  @media (max-width: ${props => props.theme.screens.tablet}) {
    position: relative;
    flex-shrink: 0;
    height: 150px;
    left: 0;
    top: 0;
    border-radius: 6px 6px 0 0;
  }
`

export const CardImg = styled.img<StyleProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.5s ease-in-out;
  filter: ${props => (props.available ? 'grayscale(0)' : 'grayscale(100%)')};
`

export const ContentContainer = styled.div`
  position: absolute;
  right: 0;
  width: calc(100% - 75px);
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;

  @media (max-width: ${props => props.theme.screens.tablet}) {
    position: relative;
    width: 100%;
  }
`

export const Content = styled.div``

export const Title = styled.h3`
  margin-bottom: 5px;
  font-size: 16px;
  color: ${props => props.theme.colors.textTitle};
`

export const Description = styled.p`
  font-size: 12px;
`

export const SeeMoreBtn = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background: #333;
  color: #fff;
  text-decoration: none;
  transition: 0.5s ease-in-out;

  &:hover {
    background: #777;
  }
`
