import styled from 'styled-components'

interface TipProps {
  visibility?: boolean
}

export const Container = styled.div<TipProps>`
  position: absolute;
  bottom: ${({ visibility }) => (visibility ? '0' : '-200px')};
  right: calc(50vw - 150px);
  width: 300px;
  height: 250px;
  background: black;
  z-index: 20;
  transition: 0.5s ease-in-out;
  padding: 10px 10px 0;
  background: ${props => props.theme.colors.background};
  border-radius: 4px 4px 0 0;
  display: flex;
  flex-direction: column;
  box-shadow: 12px -10px -5px 10px black;

  @media (min-width: ${props => props.theme.screens.tablet}) {
    bottom: 0;
    top: 0;
    margin: auto;
    right: ${({ visibility }) => (visibility ? '0' : '-250px')};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 4px 0 0 4px;
  }
`
export const TipTop = styled.div<TipProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    font-size: 22px;
    color: #d5137f;
    margin-right: 20px;
    flex-shrink: 0;
  }

  @media (min-width: ${props => props.theme.screens.tablet}) {
    transform: rotate(-90deg);
    flex-shrink: 0;
    height: 50px;
    margin-left: -85px;
    margin-right: -65px;
  }
`
export const TipTitle = styled.h3<TipProps>`
  font-size: 22px;
  font-weight: 600;
  color: ${props => props.theme.colors.textTitle};

  @media (min-width: ${props => props.theme.screens.tablet}) {
    flex-shrink: 0;
  }
`

export const TipBody = styled.a<TipProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  background: ${props => props.theme.colors.primary};
  height: 60%;
  border-radius: 6px;
  padding: 0 10px;
  color: ${props => props.theme.colors.text};
  text-decoration: none;

  svg {
    color: ${props => props.theme.colors.textTitle};
    flex-shrink: 0;
    font-size: 40px;
    margin-right: 20px;
    transition: 0.5s ease-in-out;
  }

  &:hover {
    svg {
      color: #d5137f;
    }
  }

  @media (min-width: ${props => props.theme.screens.tablet}) {
    margin-top: 0;
    width: 100%;
  }
`
export const TipMessage = styled.p<TipProps>`
  font-size: 14px;
  font-weight: 400;
`
