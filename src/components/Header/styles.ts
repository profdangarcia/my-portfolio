import styled from 'styled-components'

interface HeaderProps {
  readonly open: boolean
}

export const Container = styled.header<HeaderProps>`
  width: 100%;
  position: fixed;
  height: '92px';
  margin: ${props => (props.open ? '0 0 0 0' : '-92px 0 0 0')};
  background: #fff;
  padding: 30px 15px;
  box-shadow: -5px 10px 12px -10px rgba(201, 201, 201, 0.67);
  transition: margin 0.5s ease-in-out;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  svg {
    color: #666;
    font-size: 23px;
  }
`
export const Logo = styled.img``

export const MenuButton = styled.button``
