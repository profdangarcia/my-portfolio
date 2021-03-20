import styled from 'styled-components'

interface HeaderProps {
  isVisible?: boolean
  showNav: boolean
  isHome?: boolean
}

export const Container = styled.header<HeaderProps>`
  width: 100%;
  position: ${props => (props.isHome ? 'fixed' : 'relative')};
  max-height: ${props => (props.showNav ? '500px' : '92px')};
  overflow: hidden;
  margin: ${props => (props.isVisible ? '0 0 0 0' : '-102px 0 0 0')};
  background: #fff;
  box-shadow: -5px 10px 12px -10px rgba(201, 201, 201, 0.67);
  transition: 0.5s ease-in-out;
  min-height: 92px;
  z-index: 10;
`
export const Nav = styled.nav``

export const VisibleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 92px;
  svg {
    color: #666;
    font-size: 23px;
  }
`

export const Logo = styled.h1`
  font-size: 36px;
  color: #000;
  font-family: 'Six Caps', sans-serif;
  font-weight: 400;
  min-width: 110px;
  transition: 0.2s ease-in-out;

  &:hover {
    font-size: 38px;
  }

  @media (min-width: ${props => props.theme.screens.medium}) {
    font-size: 48px;

    &:hover {
      font-size: 50px;
    }
  }
`

export const TextLogo = styled.span`
  font-size: 36px;
  color: #000;
  font-family: 'Six Caps', sans-serif;
  font-weight: 400;
  min-width: 110px;
  transition: 0.2s ease-in-out;
  display: block;

  &:hover {
    font-size: 38px;
  }

  @media (min-width: ${props => props.theme.screens.medium}) {
    font-size: 48px;

    &:hover {
      font-size: 50px;
    }
  }
`

export const MenuButton = styled.button`
  @media (min-width: ${props => props.theme.screens.medium}) {
    display: none;
  }
`

export const MobileNavigation = styled.div<HeaderProps>`
  opacity: ${props => (props.showNav ? '1' : '0')};
  transition: opacity 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${props => props.theme.screens.medium}) {
    display: none;
  }
`

export const NavList = styled.ul`
  list-style: none;
  width: 100%;
  margin-top: 20px;

  @media (min-width: ${props => props.theme.screens.medium}) {
    display: flex;
    justify-content: flex-end;
    margin-top: 0;

    & li:not(:last-child) {
      margin-right: 10px;
    }
  }
`

export const NavItem = styled.li`
  text-align: center;
  height: 45px;
  line-height: 45px;
  border-top: 1px solid #f7f7f7;
  width: 100%;

  a {
    text-decoration: none;
    color: #000;
    transition: 0.2s ease-in;
  }

  a:hover {
    color: #666;
    font-size: 16px;
  }

  @media (min-width: ${props => props.theme.screens.medium}) {
    border-top: 0;
    width: 60px;
  }
`
