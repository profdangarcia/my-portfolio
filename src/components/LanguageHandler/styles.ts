import styled from 'styled-components'

interface ContainerProps {
  isHome: boolean
}
interface StatusProps {
  active: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 40px;
  position: ${props => (props.isHome ? 'absolute' : 'relative')};
  top: 0;
  right: 0;
  background: #f7f7f7;
  z-index: 2;
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.wrapper};
  padding: 0 15px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  & button:not(:last-child) {
    margin-right: 10px;
  }
`

export const Button = styled.button``

export const Flag = styled.img<StatusProps>`
  width: 30px;
  height: 30px;
  transition: 0.2s ease-in-out;
  opacity: ${props => (props.active ? '1' : '0.5')};
  &:hover {
    opacity: 0.8;
  }
`
